const express = require('express');

const PORT = 3000;

const userRouter = require('./routes/userRoutes.js')


const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(PORT, () => console.log(`Sever is running at PORT ${PORT}`))
