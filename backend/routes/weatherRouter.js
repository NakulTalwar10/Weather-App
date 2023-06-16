const express = require('express');
const {   getWeather } = require('../controllers/weatherController');

const Routes= express.Router()


Routes.get('/:city',getWeather)
// Routes.post('weather/:city',)



module.exports=Routes