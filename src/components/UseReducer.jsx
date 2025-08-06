import React, { act, useReducer } from "react";
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
        <div>
        {
            
        }
        </div>
    </div>
  )
};

export default UseReducer;
