const express = require('express');

const PORT = 3000;

const mysql = require('mysql2');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : "Jaiswal@2005",
    database : 'testdb1'
}
)

connection.connect((err) => {

    if(err){
        console.log(err);
        return
    }

    console.log("Connection has been created...");

    const query = `CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT
    )`
    

    connection.execute(query, (err) => {

        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is created..")
    })
})


app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`))