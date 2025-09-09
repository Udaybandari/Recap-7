import React, { useEffect, useRef, useState } from "react";

const ToolTip = ({ children, content, delay} ) => {
  const timeRef=useRef(null);
useEffect(()=>{
   return ()=>{
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
   }
  },[])
  
  const[isVisible, setIsVisible]=useState(false);
  function handleShowTooltip() {
    timeRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  }
  function handleHideTooltip() {
   if(timeRef.current)
   {
    clearTimeout(timeRef.current);
    timeRef.current=null;
   }
    setIsVisible(false);
  }

  return (
    <div className="border-5 w-[550px] h-[220px] ml-88"
     onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
        {children}
      {isVisible ? <div className="bg-red-600">{content}</div> : null}
    </div>
  )
};

export default ToolTip;
