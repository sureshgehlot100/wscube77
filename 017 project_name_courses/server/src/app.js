
const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/Courses');
const slidesRoutes = require('./routes/slides/slide');
const TeamsRoutes = require('./routes/Team/Team');
const videoRoutes = require('./routes/Video/Video');

require('./db/config');

const allRoutes = express.Router();

allRoutes.use('/admin', adminRoutes);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/slides', slidesRoutes);
allRoutes.use('/teams', TeamsRoutes);
allRoutes.use('/videos', videoRoutes);

module.exports = allRoutes;