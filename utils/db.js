const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jaiswal@2005",
    database: "CRUD"
});

connection.connect((err) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Connection has been created...");

    const CreateTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
    )`;

    connection.query(CreateTableQuery, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Users table is ready.");
    });

});

module.exports = connection;