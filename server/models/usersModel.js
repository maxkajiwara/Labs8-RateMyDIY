const db = require("../config/dbConfig");

module.exports = {
  getUsers,
  getUsersByID,
  addUser,
  getUserByUserID
};

function getUsers() {
  return db("users");
}

function getUsersByID(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(user) {
  console.log(user);
  return db("users")
    .insert(user)
    .into("users");
}

function getUserByUserID(id) {
  console.log(id);
  return db("users")
    .where({ auth_id: id })
    .first();
}
