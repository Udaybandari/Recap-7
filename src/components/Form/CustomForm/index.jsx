import React from "react";
import { loginFormElements } from "../config";
import CustomInput from "../customInput";
const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};
const CustomForm = ({
  formData,
  setFormData,
}) => {
function renderFormElement(getCurrentElement) {
    let content = null;
    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CustomInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        content = (
          <CustomInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            type={getCurrentElement.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                
              })
            }
          />
        );
        break;
    }

    return content;
  } 
  
  return (
    <div>
      
        {loginFormElements.length?loginFormElements.map((a)=>
    
             renderFormElement(a)
     
        ):null}
    </div>
  )
};

export default CustomForm;
