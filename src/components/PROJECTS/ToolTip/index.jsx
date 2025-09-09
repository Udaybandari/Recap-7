import React, { useState } from "react";

const ToolTip = ({ children, content, delay} ) => {
  let timeout;
  const[isVisible, setIsVisible]=useState(false);
  function handleShowTooltip() {
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay || 500);
  }
   function handleHideTooltip() {
    clearTimeout(timeout);
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
