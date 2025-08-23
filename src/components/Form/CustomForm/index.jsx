import React from "react";
import { loginFormElements } from "../config";

const CustomForm = ({
  formControls = [],
  onHandleSubmit,
  formData,
  setFormData,
  buttonText,
}) => {

  return (
    <div>
        {loginFormElements.length?.map((a)=>
          
        )}
    </div>
  )
};

export default CustomForm;
