const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    thumbnail: String

});

const Products = mongoose.model('products', productSchema);

module.exports = Products;