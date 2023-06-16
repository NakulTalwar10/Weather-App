const axios = require('axios');
const weatherModel = require('../models/weatherModel');
const moment = require('moment');

module.exports.getWeather = async (req, resp) => {
  const { city } = req.params;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = response.data;

    const coordinates = data.city.coord; // Latitude and Longitude
    const sunrise = new Date(data.city.sunrise * 1000);
    const sunset = new Date(data.city.sunset * 1000);

    const weeklyData = data.list.reduce((acc, item) => {
      const dateTime = moment(item.dt * 1000).format('YYYY-MM-DD HH:mm');
      const date = moment(item.dt * 1000).format('YYYY-MM-DD');
      const today = moment().format('YYYY-MM-DD');
      if (moment(date).isAfter(today) && acc.length < 7) {
        acc.push({
          dateTime: dateTime,
          date: date,
          temperature: item.main.temp,
          condition: item.weather[0].main,
          temperatureMin: item.main.temp_min,
          temperatureMax: item.main.temp_max,
          iconUrl: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
        });
      }
      return acc;
    }, []);

    const weather = new weatherModel({
      city: data.city.name,
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      temperature: data.list[0].main.temp,
      condition: data.list[0].weather[0].main,
      temperatureMin: data.list[0].main.temp_min,
      temperatureMax: data.list[0].main.temp_max,
      pressure: data.list[0].main.pressure,
      humidity: data.list[0].main.humidity,
      speed: data.list[0].wind.speed,
      sunrise: sunrise.toJSON(),
      sunset: sunset.toJSON(),
      iconUrl: `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`,
      weeklyData: weeklyData,
    });

    await weather.save();

    const result = weather.toJSON();
    resp.send(result);
  } catch (error) {
    console.error(error);
    resp.status(500).send('An error occurred while retrieving weather data.');
  }
};
