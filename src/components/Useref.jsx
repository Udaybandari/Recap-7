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
  Time.current= setInterval(()=>(
    setTime((t)=>t+1)
   ),1000)
  }
}


  return (

    <div className="m-5">
      <h1>{Time.current}</h1>
         <button onClick={startTimer}>Start</button>
    </div>
  )
};
export default Usref;
