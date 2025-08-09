import React, { useEffect, useReducer, useState } from "react";
const initialstate=[];

const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";




function reducer(state,action)
{
    switch(action.type)
    {
        case ADD_TODO:
         return[
            ...state,
            {
                 id: Date.now(),
          text: action.payload,
          completed: false
            }
         ]
       case DELETE_TODO:
  return state.filter((t) => t.id !== action.payload);

         default:
            return state;
    }
}
const AdvancedTodoApp = () => {
   const [state,dispatch]=useReducer(reducer,initialstate,  () => {
      const stored = localStorage.getItem("state");
      return stored ? JSON.parse(stored) : [];
    });
  useEffect(()=>{
  localStorage.setItem("state",JSON.stringify(state));
},[state])

   
      const [input, setInput] = useState("");
      const handleAdd=()=>{
        const trimmed=input.trim();
        if(trimmed)
        {
            dispatch({type:ADD_TODO,payload:trimmed});
            setInput("")
        }
      }
        const handleDelete=(id)=>{
      
            dispatch({type:DELETE_TODO,payload:id});
          
        
      }
  return (
    <div> 
        <h1>TODO with USEREDUCER</h1>
           <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
        <button onClick={handleAdd}>Add</button>
               
        {
            state.map((a)=>(
              <div>
                <p>{a.text}</p>
              <button className='cursor-pointer' onClick={()=>handleDelete(a.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
};

export default AdvancedTodoApp;
