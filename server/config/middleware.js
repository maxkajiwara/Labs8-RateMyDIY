const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const strategy = require("../setup-passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var KnexSessionStore = require("connect-session-knex")(session);
const db = require("./dbConfig");
var store = new KnexSessionStore({
  knex: db,
  tablename: "sessions",
  sidfieldname: "sid",
  createtable: false
});

const sessionConfig = {
  store: store,
  secret: [process.env.SESSION_SECRET || "TKd8^S$W-HPS3NtF"],
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 1 week
  resave: false,
  saveUninitialized: false
};

function authenticate(req, res, next) {
  //get token/
  const token = req.headers;
  console.log(token);

  //check to see if token exists

  //if token exists, check user_id/auth_id with info from db
}

module.exports = server => {
  //removed Logger middleware to debug server endpoints
  //server.use(logger('tiny'));
  server.use(cors());
  server.use(helmet());
  server.use(express.json());
  server.use(cookieParser());
  server.use(session(sessionConfig));
  server.use(passport.initialize());
  server.use(passport.session());
  authenticate;
};
