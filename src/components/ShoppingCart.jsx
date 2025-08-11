import React, { useReducer } from "react";
const ADD_ITEM="ADD_ITEM";
const REMOVE_ITEM="REMOVE_ITEM";
const CHANGE_QUANTITY="CHANGE_QUANTITY";
const CLEAR_CART="CLEAR_CART";
// function reducer(state,action)
// {
//     switch(action.type)
//     {
     
//     }
// }
const ShoppingCart = () => {
    // const[state,dispatch]=useReducer(reducer,[]);
    // const handleAdd=()=>{
    //     dispatch({type:ADD_ITEM,payload:})
    // }
  return (
    <div className="m-22 grid grid-cols-2">
        <div className="flex flex-col gap-4">
            <button  className="border-2 w-33 rounded-md px-2 py-1 cursor-pointer">Add to Cart</button> 
             <div className="flex gap-4">
                   <label >Quantity:</label>
             <input className="w-13 focus:outline-none text-[15px]" type="number" min='1' step='1' />
             </div>
        </div>
        <div>
          
        </div>
    </div>
  )
};

export default ShoppingCart;
