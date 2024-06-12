const mongoose = require('mongoose');
const { type } = require('os');
const { boolean } = require('webidl-conversions');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    images:{
        type:Object,
        required:true
    },
    updated_at:{
        type:Object
    },
    status:{
        type:boolean,
        default:true
    },
    created_at:{
        type:Object,
        default: Date()
    }

});
const Product = mongoose.model('products', productSchema);
module.exports = Product;