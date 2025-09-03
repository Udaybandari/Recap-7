import React, { useState } from "react";
import StepsProgressBar from ".";

const Steper = () => { 
    const[activeStep,setActiveStep]=useState(0);
      const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  return (
    <div className="m-33 border-3 h-88 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">Steps Progress</h1>
        <StepsProgressBar steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}/>
    </div>
  )
};

export default Steper;
