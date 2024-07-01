const express=require('express');
const { addCourses, readCourse, changeStatus } = require('../../controller/controllers');
const courseMulterFile = require('../../middleware/Courses/coursesMulter');


const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourses);
courseRoutes.get('/read_courses',readCourse);
courseRoutes.put('/change_course_status',changeStatus);

module.exports = courseRoutes;
