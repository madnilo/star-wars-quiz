import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = React.memo(({ endGame }) => {
  const [countdown, setCountdown] = useState("02:00");

  const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  const timer = () => {
    const countDownDate = addMinutes(new Date(), 2).getTime();

    setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(
        `0${minutes}:${seconds.toString().length < 2 ? "0" + seconds : seconds}`
      );

      if (minutes <= 0 && seconds <= 0) {
        endGame();
      }
    }, 1000);
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <React.Fragment>
      <section id="timer" className="col-sm-12">
        <p id="timer__text">{countdown}</p>
      </section>
    </React.Fragment>
  );
});

export default Timer;
