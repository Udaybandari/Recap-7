import React, { useReducer, useState } from "react";
const initialstate=[];
const ADD_TODO = "ADD_TODO";
// const TOGGLE_TODO = "TOGGLE_TODO";
// const DELETE_TODO = "DELETE_TODO";
// const CLEAR_COMPLETED = "CLEAR_COMPLETED";
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
         default:
            return state;
    }
}
const AdvancedTodoApp = () => {
    const [state,dispatch]=useReducer(reducer,initialstate);
      const [input, setInput] = useState("");
      const handleAdd=()=>{
        const trimmed=input.trim();
        if(trimmed)
        {
            dispatch({type:ADD_TODO,payload:trimmed});
            setInput("")
        }
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
              <p>{a.text}</p>
            ))
        }
    </div>
  )
};

export default AdvancedTodoApp;
