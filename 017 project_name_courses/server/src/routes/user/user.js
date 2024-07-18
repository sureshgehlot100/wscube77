const express = require('express');
const { registerUser } = require('../../controller/controllers');


const userRoutes = express.Router();

userRoutes.post('/register_user', registerUser);

module.exports = userRoutes;