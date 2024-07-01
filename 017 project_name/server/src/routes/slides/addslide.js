const express = require('express');
const { addSlides } = require('../../controller/controllers');
const slidesMulterFiles = require('../../middleware/Slides/slidesMulter');


const slidesRoutes = express.Router();

slidesRoutes.post('/add_slides', slidesMulterFiles, addSlides);

module.exports = slidesRoutes;
