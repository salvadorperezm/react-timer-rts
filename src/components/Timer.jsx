import React, { useState } from "react";

const Timer = ({ userInput }) => {
  const [remainingTime, setRemainingTime] = useState(userInput);
  let timerId;
  const myTimer = (remainingTime) => {
    if (!timerId) {
      timerId = setInterval(() => {
        setRemainingTime(remainingTime - 1);
        console.log(remainingTime);
      }, 1000);
    }
    // setInterval(() => {
    //   if (remainingTime <= 0) {
    //     stopMyTimer();
    //   } else {
    //     setRemainingTime(remainingTime - 1);
    //     console.log(remainingTime);
    //   }
    // }, 1000);
  };

  function stopMyTimer() {
    console.log("in");
    clearInterval(timerId);
  }
  return (
    <>
      <button
        onClick={() => {
          stopMyTimer();
        }}
      >
        Stop
      </button>
      <section onLoad={myTimer(remainingTime)}>
        <h3>{remainingTime <= 0 ? 0 : remainingTime}</h3>
      </section>
    </>
  );
};

export { Timer };
