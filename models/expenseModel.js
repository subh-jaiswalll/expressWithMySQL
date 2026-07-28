const db = require("../utils/db.js");

const addExpense = (expense, callback) => {
    const sql =
        "INSERT INTO expenses(amount, description, category) VALUES(?,?,?)";

    db.query(
        sql,
        [expense.amount, expense.description, expense.category],
        callback
    );
};

const getExpenses = (callback) => {
    db.query("SELECT * FROM expenses", callback);
};

const deleteExpense = (id, callback) => {
    db.query(
        "DELETE FROM expenses WHERE id=?",
        [id],
        callback
    );
};

const updateExpense = (id, expense, callback) => {
    const sql =
        "UPDATE expenses SET amount=?, description=?, category=? WHERE id=?";

    db.query(
        sql,
        [
            expense.amount,
            expense.description,
            expense.category,
            id
        ],
        callback
    );
};

module.exports = {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
};