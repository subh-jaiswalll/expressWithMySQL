const cors = require("cors");
const path = require("path");
const express = require('express')

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/expenses", expenseRoutes);

app.use(express.static(path.join(__dirname, "view")));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});