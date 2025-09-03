import React from "react";

const StepsProgressBar = ({steps,activeStep,setActiveStep}) => {
      function handlePreviousStep() {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNextStep() {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }
  return (
    <div>
        <div className="flex justify-between w-144 items-center m-auto bg-amber-100 rounded-2xl  p-10 mt-20">
            {steps&&steps.length>0
            ?steps.map((stepitem,index)=>(
                  <div key={index}>
                  {stepitem}
                    </div>
            )):null}
        </div>
        <div className="flex justify-center items-center gap-10 m-8">
            <button onClick={handlePreviousStep}  className=" cursor-pointer bg-gray-500 p-2 rounded-md text-white " >Prev Step</button>
            <button onClick={handleNextStep} className=" cursor-pointer bg-gray-500 p-2 rounded-md text-white " >Next Step</button>
        </div>
    </div>
  )
};

export default StepsProgressBar;
