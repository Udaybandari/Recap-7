import React, { useCallback, useState } from "react";
import Counter from "./Counter";
   
const Callback = () => {

    const[count1,setCount1]=useState(0);
      const[count2,setCount2]=useState(0);
      const memo1=useCallback(()=>setCount1(count1+1),[count1]);
      const memo2=useCallback(()=>setCount1(count2+1),[count2]);
  return (
    <div>
        <Counter count={count1} setCount={memo1}/>
            <Counter count={count2} setCount={memo2}/>
    </div>
  )
};

export default Callback;
