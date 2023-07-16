import React from 'react';
import { useSelector } from 'react-redux';
import './Celsius.css';
import Loader from '../../Loaders/Loader';

const Celsius = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const isLoading = useSelector((state) => state.weather.isLoading);
  console.log('weatherData:', weatherData);

  const temperature = weatherData ? weatherData.temperature : null;
  console.log('temperature:', temperature);

  const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const fahrenheit = convertToFahrenheit(temperature);

  if (isLoading || !weatherData) {
    // Render the loader or any other loading indicator
    return <Loader/>;
  }
  return (
    <div className='celsius flex justify-center'>
      <div className='mx-4 sm:mx-10'>
        <h1 className='text-white font-bold text-xl sm:text-2xl'>Celsius</h1>
        <h2 className='text-white text-lg sm:text-xl'>{temperature} °C</h2>
      </div>

      <div className='mx-4 sm:mx-10'>
        <h1 className='text-white font-bold text-xl sm:text-2xl'>Fahrenheit</h1>
        <h2 className='text-white text-lg sm:text-xl'>{fahrenheit.toFixed(2)}°F</h2>
      </div>
    </div>
  );
};

export default Celsius;
