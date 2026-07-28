

const userController = require('../controller/userController.js')
const express = require("express");

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/', userController.createUser);

// router.get('/:id', userController.getUserById)

// router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


module.exports = router;