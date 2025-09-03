import React, { useEffect, useRef, useState } from "react";

const Timer = ({initialTime}) => {
   const[time,setTime]=useState(initialTime);

   const ref=useRef(null);
    console.log(ref.current)
    useEffect(()=>{
        ref.current=setInterval(()=>{
                 setTime((t)=>t-1)
        }
           ,1000
        )
    }
   
    ,[])
    
  return (
    <div>
       {/* <h1>{time}</h1> */}
    </div>
  )
};

export default Timer;
