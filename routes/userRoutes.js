

const userController = require('../controller/userController.js')
const express = require("express");

const router = express.Router();

router.get('/', userController.getUser);

router.post('/', userController.addUser);

router.get('/:id', userController.getUserById)

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


module.exports = router;