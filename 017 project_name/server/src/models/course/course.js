const mongoose = require('mongoose');

const addcourseSchema = new mongoose.Schema({
    coursename:String,
    courseprice:Number,
    courseduration:String,
    coursedes:String,
    thumbnail:String,
    status:{
        type:Boolean,
        default:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date
    }
});

const Course = mongoose.model('courses', addcourseSchema);

module.exports = Course;