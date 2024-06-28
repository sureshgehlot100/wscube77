
const express = require ('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/addCourses');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin',adminRoutes);
allRoutes.use('/course',courseRoutes);

module.exports=allRoutes;