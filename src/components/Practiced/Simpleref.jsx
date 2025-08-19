import React, { useEffect, useRef } from "react";

const Simpleref = () => { 
    const countRef=useRef(0);
    const increment=()=>{
        countRef.current+=1;
        console.log(countRef.current) ;
        console.log(divRef.current)
    }
    const divRef=useRef();
    const inputRef=useRef();
     useEffect(()=>{
            setTimeout(()=>{
    divRef.current.style.color="red";
    },1000)
    inputRef.current.focus();
    return ()=>clearTimeout();
     },[])
    
    
  return(
    <div ref={divRef} className="m-33 ">
       <h1 >Hello</h1>
       <button className="border-2 px-2" onClick={increment}>Click</button>
       <input type="text" ref={inputRef} />
    </div>
  )
};

export default Simpleref;
