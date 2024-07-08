const express = require('express');
const { addSlides, readSlides, deleteSingleSlides } = require('../../controller/controllers');
const slidesMulterFiles = require('../../middleware/Slides/slidesMulter');


const slidesRoutes = express.Router();

slidesRoutes.post('/add_slides', slidesMulterFiles, addSlides);
slidesRoutes.get('/read_slide',readSlides);
slidesRoutes.delete('/delete_single_slides/:_id',deleteSingleSlides);

module.exports = slidesRoutes;
