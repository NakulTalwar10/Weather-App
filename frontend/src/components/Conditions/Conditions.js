import React from 'react';
import { useSelector } from 'react-redux';
import './Condition.css';

const Conditions = () => {
  const weatherData = useSelector((state) => state.weather.data);

  // Null checks and default values
  const temperatureMax = weatherData ? weatherData.temperatureMax : null;
  const temperatureMin = weatherData ? weatherData.temperatureMin : null;
  const humidity = weatherData ? weatherData.humidity : null;
  const pressure = weatherData ? weatherData.pressure : null;

  return (
    <div className='conditions flex flex-wrap justify-center'>
      <div className='data-container bg-gray-800 p-4 rounded-lg mx-4 my-4 sm:my-0'>
        <h1 className='text-white font-bold text-lg sm:text-xl mb-4'>Temperature</h1>
        <div className='data-row'>
          <div className='data-item'>
            <h2 className='text-white'>Min: {temperatureMax} °C</h2>
          </div>
          <div className='data-item'>
            <h2 className='text-white'>Max: {temperatureMin} °C</h2>
          </div>
        </div>
      </div>
      <div className='data-container bg-gray-800 p-4 rounded-lg mx-4 my-4 sm:my-0'>
        <h1 className='text-white font-bold text-lg sm:text-xl mb-4'>Humidity</h1>
        <div className='data-row'>
          <div className='data-item'>
            <h2 className='text-white'>Humidity: {humidity} %</h2>
          </div>
        </div>
      </div>
      <div className='data-container bg-gray-800 p-4 rounded-lg mx-4 my-4 sm:my-0'>
        <h1 className='text-white font-bold text-lg sm:text-xl mb-4'>Pressure</h1>
        <div className='data-row'>
          <div className='data-item'>
            <h2 className='text-white'>Pressure: {pressure} hPa</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
