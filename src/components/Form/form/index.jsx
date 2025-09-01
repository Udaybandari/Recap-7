import  { useState } from "react";
import CustomForm from "../CustomForm";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData({
      ...formData,
      [name]: value, 
    });
  }


  function handleSubmit(e) {
    e.preventDefault(); 
    const{name}=e.target
    console.log("Form Submitted:", formData.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>

      
    </form>
  );
};
export default Form;
