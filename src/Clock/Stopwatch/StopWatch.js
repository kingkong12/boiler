import { useState, useEffect } from "react";

function StopWatch() {
  const [start, toggleStart] = useState(false);
  const [time, changeTime] = useState(0);

  useEffect(() => {
    let id = null;

    if (start) {
      id = setInterval(() => {
        changeTime((preValue) => preValue + 1);
      }, 10);
    }
    if (start === false && id) {
      clearInterval(id);
    }
    // return () => clearInterval(id);
  }, [start]);
  /* 
    - Display unit 
    - Button - start   
    - button - ends
    - button with reset 
  */

  const toggle = () => toggleStart((preValue) => !preValue);
  const reset = () => {
    // reset the value
    toggle();
    changeTime(0);
  };
  return (
    <div>
      {time}
      <div>
        <button onClick={() => toggle()}>{start ? "Stop" : "Start"}</button>

        <button onClick={() => reset()}>reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
