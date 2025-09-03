import React, { useEffect, useRef, useState } from "react";

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const ref = useRef(null);
useEffect(()=>{
    setTime(initialTime)
},[initialTime])
  useEffect(() => {
    if (isRunning) {
      //internal
      ref.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(ref.current);
            setIsRunning(false);

           

            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(ref.current);
    }

    return () => {
      clearInterval(ref.current);
    };
  }, [isRunning]);

  

  return (
    <div>
      <h1>{time}</h1>
      <button className="cursor-pointer" onClick={() => setIsRunning(true)}>start</button>
      <button className="cursor-pointer" onClick={() => setIsRunning(false)}>stop</button>
    </div>
  );
};

export default Timer;
