import React, { useRef, useState } from "react";


const Usref = () => {
const [running,setRunning]=useState(false);
const [time,setTime]=useState(0);
const [store,setStore]=useState(null);
const inputref=useRef(null);

const prevTime=useRef(null);
const Time=useRef(null);
const startTimer=()=>{
  if(!running)
  {
   setRunning(true);
  setStore(setInterval(()=>{
setTime((t)=>t+1);
// console.log(Time.current)
  }
    ,1000)
  
  }) 
}
const focus=()=>{
  inputref.current.focus();
  console.log(inputref)
}
const stopTimer=()=>{ 
  clearInterval(Time.current)
  prevTime.current=time;
  setRunning(false);
}
  return (

    <div className="m-5 flex gap-5">
      {prevTime.current!==null&&<h1>{prevTime.current}</h1>}
<input type="text" ref={inputref} name="" id="" />
      <h1>{time}</h1>
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
         <button onClick={focus}>Focus</button>
    </div>
  )
};
export default Usref;
