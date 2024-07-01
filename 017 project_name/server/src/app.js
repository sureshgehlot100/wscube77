
const express = require ('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/addCourses');
const slidesRoutes = require('./routes/slides/addslide');
require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin',adminRoutes);
allRoutes.use('/course',courseRoutes);
allRoutes.use('/slides',slidesRoutes);

module.exports=allRoutes;