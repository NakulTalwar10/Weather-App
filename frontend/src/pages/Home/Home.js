import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../slices/weatherSlice';
import CurrentDate from '../currentDate/Current';
import TodayForcast from '../../components/todayForacst/TodayForcast';
import Conditions from '../../components/Conditions/Conditions';
import Celsius from '../../components/Celsius/Celsius';
import WeeklyForcast from '../../components/WeeklyForcast/WeeklyForcast';
import './Home.css';
import Maps from '../../components/Maps/Maps';

const Home = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);

  const handleSubmit = () => {
    dispatch(getWeather(city));
    setCity('');
  };

  return (
    <div className='container mx-auto my-8 px-4'>
      <div className='card'>
        <div className='p-4 flex justify-between items-center'>
          <div className='flex space-x-2'>
            <button className='btn' onClick={() => setCity('Punjab')}>
              Punjab
            </button>
            <button className='btn' onClick={() => setCity('Mumbai')}>
              Mumbai
            </button>
            <button className='btn' onClick={() => setCity('Chennai')}>
              Chennai
            </button>
            <button className='btn' onClick={() => setCity('Bangalore')}>
              Bangalore
            </button>
          </div>
          <div className='flex items-center'>
            <input
              type='text'
              className='search__input'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='Type your text'
            />
            <button className='search__button' onClick={handleSubmit}>
              <svg className='search__icon' aria-hidden='true' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='p-4'>
          <div className='text-white text-xl font-bold mb-4'>
            <CurrentDate />
          </div>
          <div className='mb-4'>
            <TodayForcast />
          </div>
          <div className='mb-4'>
            <Conditions />
          </div>
          <div className='mb-4'>
            <Celsius />
          </div>
          <div className='mb-4'>
            <WeeklyForcast />
          </div>
          <div className='mb-4 container'>
          {weatherData?.latitude && weatherData?.longitude ? (
            <Maps
              city={weatherData.city}
              temperature={weatherData.temperature}
              latitude={weatherData.latitude}
              longitude={weatherData.longitude}
            />
          ) : (
            <p className='text-white font-bold'>Loading map...</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
