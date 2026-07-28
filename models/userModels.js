

const db = require('../utils/db.js');

const addUser =  (user, callback) => {

    const sql = "INSERT INTO users(name, email, phone) VALUES (?,?,?)";

    db.query(sql, [user.name, user.email, user.phone], callback);
}

const getUser = (callback) => {
    db.query("SELECT * FROM users", callback);
}


const deleteUser = (id, callback) => {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
}

module.exports = {
    addUser,
    getUser,
    deleteUser
}