const express = require("express");
const router = express.Router();
const passport = require("passport");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn(
  "/signin"
);

const db = require("../models/usersModel");

router.get(
  "/signin",
  passport.authenticate("auth0", {
    scope: "openid email profile"
  }),
  function(req, res) {
    res.redirect("/");
  }
);

router.get("/callback", function(req, res, next) {
  passport.authenticate("auth0", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/signin");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || "/test");
    });
  })(req, res, next);
});

router.get("/signout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/test", ensureLoggedIn, authenticate, function(req, res, next) {
  //console.log(req.user);
  //console.log(req.user.app_metadata);
  let sub = req.user._json.sub.split("|");
  let auth_id = sub[1];
  let username = req.user._json.nickname;
  let user = {
    auth_id,
    username
  };
  // db
  //     .addUser(user)
  //     .then(ids => {
  //         console.log(ids);
  //         res.status(201).json(ids[0]);
  //     })
  //     .catch(err => {
  //         res.status(500).json(err);
  //     });
  res.status(200).json(req.user);
});

function authenticate(req, res, next) {
  //get user_id from user object
  const tmp = req.user.user_id.split("|");
  console.log(tmp);
  const id = tmp[1];

  //check to see if token exists

  //if token exists, check user_id/auth_id with info from db
  db.getUserByUserID(id)
    .then(user => {
      console.log("found something");
      console.log(user);
      if (id === user.auth_id) {
        console.log("it matcheeees");
      } else res.status(500).json({ error: "Do not have permission" });
    })
    .catch(err => res.status(500).json(err));
}

module.exports = router;
