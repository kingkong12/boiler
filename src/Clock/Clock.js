import { useState } from "react";
import { useEffect } from "react";

function Clock() {
  let [timer, setTimer] = useState(new Date().toLocaleTimeString());
  let [intervlId, setIntervlId] = useState(null);

  useEffect(() => {
    let id = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    setIntervlId(intervlId);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      Display Tiimer {timer}
      {/* <button onClick={() => clearInterval(intervlId)}> clear </button> */}
    </div>
  );
}

export default Clock;
