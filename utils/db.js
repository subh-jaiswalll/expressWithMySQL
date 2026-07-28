
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jaiswal@2005",
    database: "expenseDB"
});

connection.connect((err) => {

    if (err) {
        console.log(err);

        return;
    }

    console.log("Connection has been created...");

    const CreateTableQuery = `
CREATE TABLE IF NOT EXISTS expenses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10,2) NOT NULL,
    description VARCHAR(255),
    category VARCHAR(100)
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