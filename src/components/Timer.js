import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = '2024-09-13T23:59:59';

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center mx-2 md:mx-4 transform transition-transform duration-300 hover:scale-110"
      >
        <div className="bg-black text-white text-4xl sm:text-5xl font-extrabold p-4 sm:w-24 sm:h-24 w-16 h-16 flex items-center justify-center rounded-lg shadow-lg animate-bounce">
          {timeLeft[interval]}
        </div>
        <span className="hour text-md sm:text-lg text-white font-extrabold  mt-2 capitalize">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex space-x-4 sm:space-x-6 flex-wrap justify-center">
      {timerComponents}
    </div>
  );
}
