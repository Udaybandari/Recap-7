import React, { useRef, useState } from "react";


const Usref = () => {
const [running,setRunning]=useState(false);
const [time,setTime]=useState(0);

const input=useRef(null);
const prevTime=useRef(null);
const Time=useRef(null);
const startTimer=()=>{
  if(!running)
  {
   setRunning(true);
  Time.current= setInterval(()=>{
setTime((t)=>t+1);
console.log(Time.current)
  }
    ,1000)
  
  }
}

const stopTimer=()=>{ 
  clearInterval(Time.current)
  prevTime.current=time;
  setRunning(false);
}
  return (

    <div className="m-5 flex gap-5">
      {prevTime.current!==null&&<h1>{prevTime.current}</h1>}
      <h1>{time}</h1>
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
    </div>
  )
};
export default Usref;
