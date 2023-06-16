import React from 'react';
import { useSelector } from 'react-redux';
import './WeeklyForcast.css';
import moment from 'moment/moment';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WeeklyForecast = () => {
  const weeklyData = useSelector((state) => state.weather.data?.weeklyData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ margin: '0px', padding: '0px' }}>
      {dots.map((dot, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            margin: '0px 4px',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          {dot}
        </span>
      ))}
    </div>
  ),
  
    customPaging: () => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'white',
        }}
      ></div>
    ),
  };

  if (!weeklyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weekly">
      <h1 className="text-white font-bold text-2xl">Daily Forecast</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {weeklyData.map((item, index) => (
            <div key={index} className="card">
              <img src={item.iconUrl} alt="Weather Icon" className="weather-icon" />
              <h2 className="text-white">
                Date and Time: {moment(item.dateTime).format('YYYY-MM-DD HH:mm')}
              </h2>
              <div className="temperature-container">
                <p className="temperature">Temperature: {item.temperature} °C</p>
                <div className="temperature-range">
                  <p className="temperature-min mx-2 text-xl">Min: {item.temperatureMin} °C</p>
                  <p className="temperature-max mx-2 text-xl">Max: {item.temperatureMax} °C</p>
                </div>
              </div>
              <p className="condition">Condition: {item.condition}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WeeklyForecast;
