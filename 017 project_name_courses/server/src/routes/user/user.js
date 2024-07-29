const express = require('express');
const { registerUser, fetchUser } = require('../../controller/controllers');


const userRoutes = express.Router();

userRoutes.post('/register_user', registerUser);
userRoutes.get('/read_user', fetchUser);

module.exports = userRoutes;