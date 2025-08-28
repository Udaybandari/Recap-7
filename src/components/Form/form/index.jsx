import  { useState } from "react";

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
      <h1>Form</h1>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter your name"
        onChange={handleOnChange}
      />

      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleOnChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
