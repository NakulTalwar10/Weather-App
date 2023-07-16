import React, { useEffect } from 'react';
import './TodayForcast.css';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../slices/weatherSlice';
import Loader from '../../Loaders/Loader';

const TodayForecast = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const isLoading = useSelector((state) => state.weather.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather('Delhi')); // Replace 'Delhi' with the desired city value
  }, [dispatch]);

  if (isLoading || !weatherData) {
    // Render the loader or any other loading indicator
    return <Loader/>;
  }

  return (
    <div className="today py-6 sm:py-10 flex flex-col items-center">
      <h1 className="text-white font-bold text-3xl mb-4">Today's Forecast for: {weatherData && weatherData.city}</h1>
      {weatherData && (
        <div className="forecast-container rounded-lg p-6">
          <div className="weather-info flex items-center">
            <img
              src={weatherData.iconUrl}
              alt="Weather Icon"
              className="weather-icon w-20 h-20 sm:w-32 sm:h-32 mr-6"
            />
            <div className="weather-description">
              <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">
                <span>Current Temperature:</span> {weatherData.temperature}°C
              </h2>
              <p className="text-white font-bold text-xl sm:text-2xl mb-2">
                <span>Weather Condition:</span> {weatherData.condition}
              </p>
              <p className="text-white font-bold text-xl sm:text-2xl mb-2">
                <span>Wind Speed:</span> {weatherData.speed} km/h
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayForecast;
