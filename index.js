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

    const userQuery = `CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
    
    )`
    
    const BusQuery = `CREATE TABLE bus(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT NOT NULL UNIQUE,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL    
    )`

    const BookingTable = `CREATE TABLE bookingTable(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL
    )`

    const PaymentTable = `CREATE TABLE paymentTable(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus INT NOT NULL
    )`




    connection.query(userQuery, (err) => {
    if (err) return console.log(err);

    console.log("Users table created");

    connection.query(BusQuery, (err) => {
        if (err) return console.log(err);

        console.log("Bus table created");

        connection.query(BookingTable, (err) => {
            if (err) return console.log(err);

            console.log("Booking table created");

            connection.query(PaymentTable, (err) => {
                if (err) return console.log(err);

                console.log("Payment table created");

                connection.end();
            });
        });
    });
});
})


app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`))


// Write SQL queries to create the following tables:
// Users Table

// This table should store user information.

// Columns: id, name, email

// Buses Table:


// This table will store information about available buses.

// Columns: id, busNumber, totalSeats, availableSeats

// Bookings Table:

// This table will store seat bookings.
// Columns: id, seatNumber


// Payments Table

// This table will store payment information.
// /Columns: id, amountPaid, paymentStatus