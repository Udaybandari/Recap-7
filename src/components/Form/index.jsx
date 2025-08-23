import React, { useState } from "react";

const Form = () => {
    const [FormData,setFormData]=useState({
        name:"",
        email:"",
    })
    const[nameValue,setnameValue]=useState("");
     const[emailValue,setemailValue]=useState("");
     function handleOnChange(e){
        setFormData({
            ...FormData,
            name:e.target.value
        })
     }
     function handleOnChangeemail(e){
        setFormData({
            ...FormData,
            email:e.target.value
        })
     }

  return (
    <div>
       <h1>Form</h1> 
       <input 
       type="text"
       name="name" 
       value={FormData.name}
       placeholder="enter the name"
       onChange={handleOnChange}/>
         <input 
       type="text"
       name="email" 
       value={FormData.email}
       placeholder="entertheemail"
       onChange={handleOnChangeemail}/>
    </div>
  )
};

export default Form;
