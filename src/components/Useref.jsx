import React, { useRef, useState } from "react";


const Usref = () => {
    const[,setRender]=useState({});
const count=useRef(0);
const handleincrease=()=>{
    count.current+=1;
    console.log(count.current)
    setRender({});
}
const handledecrease=()=>{
    count.current-=1;
    console.log(count)
    setRender({});
}
  return (

    <div className="m-5">
         <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
      />
      <button onClick={handleFocus}>Focus the Input</button>
    <p>{count.current}</p>
<button  className="cursor-pointer p-4" onClick={handleincrease}>Increase</button>
<button className="cursor-pointer p-4" onClick={handledecrease}>Decrease</button>
    </div>
  )
};
export default Usref;
