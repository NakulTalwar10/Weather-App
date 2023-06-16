import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [time, setTime] = useState();

  const showDate = new Date();

  const dt = showDate.toDateString();

  const updateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  useEffect(() => {
    setInterval(() => updateTime(new Date()), 1000);
  }, []);

  return (
    <div>
      <div>{dt}</div>
      <div>{time}</div>
    </div>
  );
};

export default CurrentDate;
