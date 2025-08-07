import React, { useReducer } from "react";
const initialstate={count:0}
function reducer(state,action)
{
    switch(action.type)
    {
        case 'increment':
            return {count:state.count+1};
             case 'decrement':
            return {count:state.count-1};
             case 'reset':
            return {count:0};
            default:
                return state;
    }
}
const UseReducer2 = () => {
     const [state,dispatch]=useReducer(reducer,initialstate);
  return (
    <div className="flex gap-5 m-5"> 
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:'increment'})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'decrement'})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:'reset'})}>RESET</button>
    </div>
  )
};

export default UseReducer2;
