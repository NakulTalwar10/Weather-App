const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  latitude: Number,
  longitude: Number,
  temperature: Number,
  condition: String,
  temperatureMin: Number,
  temperatureMax: Number,
  pressure: Number,
  humidity: Number,
  speed: Number,
  sunrise: Date,
  sunset: Date,
  iconUrl: String,
  weeklyData: [
    {
      dateTime: String,
      date: String,
      temperature: Number,
      condition: String,
      temperatureMin: Number,
      temperatureMax: Number,
      iconUrl: String,
    },
  ],
});

const Weather = mongoose.model('weatherdatas', weatherSchema);

module.exports = Weather;
