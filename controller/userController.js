

// const User = require('../models/userModels.js');


// // const createUser = (req, res) => {
// //     console.log("Body:", req.body);

// //     if (!req.body) {
// //         return res.status(400).json({
// //             message: "req.body is undefined"
// //         });
// //     }

// //     User.addUser(req.body, (err, result) => {
// //         if (err) {
// //             console.log(err);
// //             return res.status(500).json({
// //                 message: err.message
// //             });
// //         }

// //         res.status(201).json({
// //             message: "User added successfully"
// //         });
// //     });
// // };
// const createUser = (req, res) => {
//     User.addUser(req.body, (err, result) => {
//         if (err) {
//             console.log("MYSQL ERROR:", err);   // <-- Important
//             return res.status(500).json({
//                 message: err.message
//             });
//         }

//         res.status(201).json({
//             message: "User added successfully"
//         });
//     });
// };

// const getUsers = (req, res) => {

//     User.getUser((err, result) => {

//         if(err){
//             return res.status(500).json({
//                 message : "Database Error"
//             })
//         }

//         res.json(result);
//     })
// }

// const deleteUser = (req, res) => {

//     User.deleteUser(req.params.id, (err, result) => {

//         if(err){
//             return res.status(500).json({
//                 message : "Database Error"
//             })
//         }

//         res.json({
//             message : "User Deleted"
//         })
//     })
// }

// module.exports = {
//     createUser,
//     getUsers, 
//     deleteUser
// }