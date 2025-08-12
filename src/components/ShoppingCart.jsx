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
             <div className="flex  flex-col gap-4">
                <label >NAME:</label>
             <input className="w-48 focus:outline-none text-[15px]" placeholder="Enter the name of product" type="Text" min='1' step='1'  />
                   <label >Quantity:</label>
             <input className="w-33 focus:outline-none text-[15px]" placeholder="Enter quantity.." type="number" min='1' step='1'  />
               <label >ADD PRICE:</label>
             <input className="w-33 focus:outline-none text-[15px]" placeholder="Enter price.." type="number" min='1' step='1'  />
             
             </div>
        </div>
        <div>
          
        </div>
    </div>
  )
};

export default ShoppingCart;
