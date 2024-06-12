const express = require('express');
require('./db/config');
const productRoutes = require('./routes/products/productRoutes');

const allroutes = express.Router();

allroutes.use('/product', productRoutes);

module.exports = allroutes;