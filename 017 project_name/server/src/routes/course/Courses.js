const express=require('express');
const { addCourses, readCourse, changeStatus, readSingleCourse, updateCourse, deleteSingleCourse } = require('../../controller/controllers');
const courseMulterFile = require('../../middleware/Courses/coursesMulter');


const courseRoutes = express.Router();

courseRoutes.post('/add_course', courseMulterFile, addCourses);
courseRoutes.get('/read_courses',readCourse);
courseRoutes.put('/change_course_status',changeStatus);
courseRoutes.get('/fetch_course_with_id/:_id',readSingleCourse);
courseRoutes.put('/update_course/:_id',courseMulterFile,updateCourse);
courseRoutes.delete('/delete_single_course/:_id', deleteSingleCourse);


module.exports = courseRoutes;
