import React, {  useReducer } from "react";
const initialstate={
    showflag:false,
    changetext:false,
};
const HIDE_TEXT="HIDE_TEXT";
const SHOW_TEXT="SHOW_TEXT";
const CHANGE_TEXT="CHANGE_TEXT";
function reducer(state,action)
{
    switch(action.type)
    {
        case HIDE_TEXT:
            return {
                ...state,
                showflag:false,
            }
         case SHOW_TEXT:
            return {
                ...state,
                showflag:true,
            }
             case CHANGE_TEXT:
            return {
                ...state,
                changetext:!state.changetext,
            }
            default:
            return state;

    }
}
const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer,initialstate);
    
  return (
    <div>
        <div className="m-22">
        {
            state?.showflag?(<h3  style={{backgroundColor:state?.changetext?"black":"red"}}> UseReducer Example</h3>):null
        }
       <div className="flex gap-5">
         <button className="border-2" onClick={()=>dispatch({type:SHOW_TEXT})}>SHOW TEXT</button>
        <button  className="border-2" onClick={()=>dispatch({type:HIDE_TEXT})}>HIDE TEXT</button>
        <button className="border-2" onClick={()=>dispatch({type:CHANGE_TEXT})}>CHANGE STYLE</button>
       </div>
        </div>
    </div>
  )
};

export default UseReducer;
