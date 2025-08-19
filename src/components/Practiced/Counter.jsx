import React from "react";
import { memo } from "react";
const Counter = ({count,setCount}) => {
    console.log("THis is rendered ",count)
  return (
  <div className="flex gap-5">
    <h1>{count}</h1>
    <button onClick={setCount}>Click</button>
  </div>
  )
  
};

export default memo(Counter);
