const Expense = require("../models/expenseModel.js");

exports.createExpense = (req, res) => {
    Expense.addExpense(req.body, (err, result) => {
        if (err) {
            console.log("MYSQL ERROR:", err);
            return res.status(500).json({
                message: err.message
            });
        }

        res.status(201).json({
            message: "Expense Added"
        });
    });
};
exports.getExpenses = (req, res) => {
    Expense.getExpenses((err, result) => {
        if (err) {
            console.log("MYSQL ERROR:", err);
            return res.status(500).json({
                message: err.message
            });
        }

        res.json(result);
    });
};
exports.deleteExpense = (req, res) => {
    Expense.deleteExpense(req.params.id, (err) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        res.json({
            message: "Expense Deleted"
        });
    });
};

exports.updateExpense = (req, res) => {
    Expense.updateExpense(
        req.params.id,
        req.body,
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Expense Updated"
            });
        }
    );
};