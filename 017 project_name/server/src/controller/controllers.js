const adminLogin = require('./admin/adminLogin');
const addCourses = require('./courses/addcourses');
const registerAdmin = require('./admin/registerAdmin');
const addSlides = require('./slides/addslides');
const readCourse = require('./courses/readcourse');
const changeStatus = require('./courses/changeStatus');
const readSingleCourse = require('./courses/readsinglecourse');
const updateCourse = require('./courses/updateCourse');
const deleteSingleCourse = require('./courses/deleteSingleCourse');
const readSlides = require('./slides/readslides');
const deleteSingleSlides = require('./slides/deleteSingleslides');
const addTeams = require('./teams/addTeams');
const readSingleteams = require('./teams/readSingleteams');
const deleteSingleTeams = require('./teams/deleteSingleteams');

module.exports = {
    registerAdmin,
    adminLogin,
    addCourses,
    addSlides,
    readCourse,
    changeStatus,
    readSingleCourse,
    updateCourse,
    deleteSingleCourse,
    readSlides,
    deleteSingleSlides,
    addTeams ,
    readSingleteams,
    deleteSingleTeams
}