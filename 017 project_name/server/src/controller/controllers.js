const adminLogin = require('./admin/adminLogin');
const addCourses = require('./courses/addcourses');
const registerAdmin = require('./admin/registerAdmin');
const addSlides = require('./slides/addslides');
const readCourse = require('./courses/readcourse');
const changeStatus = require('./courses/changeStatus');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourses,
    addSlides,
    readCourse,
    changeStatus

}