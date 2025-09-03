import React, { useState } from "react";
import Timer from "./timer";

const Main = () => {
    const[value,setValue]=useState();
    console.log(value);
  return (
    <div className="m-55 border-5 h-88 flex items-center justify-center flex-col">
        <h1>Timer</h1>
        <input type="number" value={value}  placeholder="enter the value" onChange={(e)=>{
            setValue(Number(e.target.value));

        }}/>
        <Timer initialTime={value}/>
    </div>
  )
  
};

export default Main;
