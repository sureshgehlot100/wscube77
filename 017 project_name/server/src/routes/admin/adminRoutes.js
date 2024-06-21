const express = require('express');
const { adminLogin } = require('../../controller/controllers');

const adminRoutes = express.Router();

adminRoutes.post('/login',adminLogin)

// adminRoutes.get('/check', (req, res) => {
//     res.send('hello');
// });
// adminRoutes.post('/getData', (req, res) => {
//     const data = req.body;
//     console.log(data);
//     res.send('Hello')
// })

module.exports = adminRoutes;