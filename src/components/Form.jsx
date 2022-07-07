import React, { useState } from "react";
import { Timer } from "./Timer";

const Form = () => {
  const [userInput, setUserInput] = useState(0);
  const [timerView, setTimerView] = useState(false);

  function preventFormUpload(e) {
    e.preventDefault();
    setTimerView(true);
  }

  return (
    <main>
      <form>
        <input
          type="number"
          id="form__input"
          onChange={(e) => {
            console.log(e.target.value);
            setUserInput(e.target.value);
          }}
        />
        <label htmlFor="form__input">Input your seconds</label>
        <button
          onClick={(e) => {
            preventFormUpload(e);
          }}
        >
          Add
        </button>
      </form>
      {timerView && <Timer userInput={userInput} />}
    </main>
  );
};

export { Form };
