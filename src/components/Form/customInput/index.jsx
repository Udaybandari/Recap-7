import React from "react";

const CustomInput = ({label, onChange, type, name, id, value, placeholder}) => {
  return (
    <div>
  <input 
  type={type||"text"}
   name={name||"name"}
   id={id||"id"}
   value={value} 
   placeholder={placeholder||"enter value.."}
   onChange={onChange}/>
    </div>
  )
};

export default CustomInput;
