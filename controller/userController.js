

const db = require('../utils/db.js')


const getUser = (req, res) => {

    

    const getQuery = 'SELECT * FROM users';


    db.query(getQuery, (err, result) => {

        if(err){
            console.log(err)
            return res.status(500).json({
                message : "Error fetching users..."
            })
        }

        res.status(200).json(result)
    })
}


const addUser = (req, res) => {

    const {name, email} = req.body;

    const addQuery = "INSERT INTO users (name, email) VALUES (?, ?)";

    db.query(addQuery, [name, email], (err, result) =>{

        if(err){
            console.log(err)
           return res.status(500).json({
                message : "error inserting users..."
            })
        }

        res.status(201).json({
            message : "User insert successfully",
            id : result.insertId
        })
    })
}

const getUserById = (req, res) => {

    const { id } = req.params;

    const getQuery = "SELECT * FROM users WHERE id = ?";

    db.query(getQuery, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error fetching user..."
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(result[0]);
    });
};

const updateUser = (req, res) => {
    const { name, email } = req.body;

    const { id } = req.params;

    const query =
        "UPDATE users SET name=?, email=? WHERE id=?";

    db.query(query, [name, email, id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error updating user"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("User Updated");

        res.json({
            message: "User updated successfully"
        });

    });
}

const deleteUser = (req, res) =>{ 
    const { id } = req.params;

    const query =
        "DELETE FROM users WHERE id=?";

    db.query(query, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Error deleting user"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("User Deleted");

        res.json({
            message: "User deleted successfully"
        });

    });

}
module.exports = {
    getUser,
    addUser,
    getUserById,
    updateUser,
    deleteUser
}