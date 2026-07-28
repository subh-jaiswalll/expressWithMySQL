const express = require('express');

const PORT = 3000;

const userRouter = require('./routes/userRoutes.js')

const cors = require("cors");

const path = require('path')

const app = express();

app.use(cors());

app.use(express.json());


app.use('/users', userRouter);

app.use(express.static(path.join(__dirname, "view")));



app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`))
