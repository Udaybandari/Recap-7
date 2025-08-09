import React, { useEffect,useReducer, useState } from "react";
const ADD_TODO="ADD_TODO"
const DELETE_TODO="DELETE_TODO"
function reducer(state,action)
{
  switch(action.type)
  {
  case ADD_TODO:
     return[
      ...state,
      {
        id:Date.now(),
        text:action.payload,
      }
     ]
  case DELETE_TODO:
    return state.filter((t)=>t.id!=action.payload)
     default:
      return state;
  }
}
const AdvancedTodoApp = () => {
  const handleAdd =()=>{
  const trimmed=input.trim();
  if(trimmed)
  {
        dispatch({type:ADD_TODO,payload:trimmed})
  }
   setInput("");
}
const deleteTodo =(id)=>{
  dispatch({type:DELETE_TODO,payload:id})
}
  const [input,setInput]=useState("")
   const[state,dispatch]=useReducer(reducer,[],()=>{const stored=localStorage.getItem("state");return stored?JSON.parse(stored):[]});
  useEffect(()=>{
    localStorage.setItem("state",JSON.stringify(state));
  },[state])
  return (
    <div className="h-42 border-3 w-88 m-13 flex flex-col items-center justify-center gap-5">
    <div className="flex">
        <input type="text"  className="border-2 focus:outline-0" value={input} onChange={(e)=>setInput(e.target.value)} />
     <button className="cursor-pointer" onClick={handleAdd}>Add</button>
    </div>
    <div className="flex flex-col gap-5">
       {state.map((a)=>(
      <div  className="flex justify-center items-center gap-5">
            <p>{a.text}</p>
            <button onClick={()=>deleteTodo(a.id)}>Delete</button>
        </div>
     ))}
    </div>
    </div>
  )
};

export default AdvancedTodoApp;

