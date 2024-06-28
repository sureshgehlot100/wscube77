const express=require('express');
const { addCourses } = require('../../controller/controllers');
const courseMulterFile = require('../../middleware/Courses/coursesMulter');


const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourses);

module.exports = courseRoutes;
