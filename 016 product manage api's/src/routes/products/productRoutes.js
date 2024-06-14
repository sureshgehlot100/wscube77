const express = require('express');

const upload = require('../../middlewares/multer/multer');
const readProducts = require('../../controllers/products/readProduct');
const insertProduct = require('../../controllers/products/insertProduct');
const deleteProductdata = require('../../controllers/products/deleteProductdata');



const productRoutes = express.Router();

productRoutes.post('/insert_product', upload, insertProduct);
productRoutes.get('/read_product', readProducts);
productRoutes.delete('/delete_product/:_id',deleteProductdata);

module.exports = productRoutes;