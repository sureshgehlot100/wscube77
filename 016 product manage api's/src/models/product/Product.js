const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    mrp: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    updated_at: {
        type: Object
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});
const Product = mongoose.model('products', productSchema);
module.exports = Product;