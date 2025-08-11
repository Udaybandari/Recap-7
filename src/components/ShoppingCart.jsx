import React, { useReducer } from "react";
const ADD_ITEM="ADD_ITEM";
const REMOVE_ITEM="REMOVE_ITEM";
const CHANGE_QUANTITY="CHANGE_QUANTITY";
const CLEAR_CART="CLEAR_CART";
function reducer(state,action)
{
    switch(action.type)
    {

    }
}
const ShoppingCart = () => {
    const[state,dispatch]=useReducer(reducer,[]);
  return (
    <div className="m-22">
        <button  onClick={handleAdd}className="border-2 rounded-md px-2 py-1 cursor-pointer">Add to Cart</button>
        <div>

        </div>
    </div>
  )
};

export default ShoppingCart;
