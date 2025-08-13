import React, { useState,useReducer } from "react";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
// const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
// const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
// const MOVE_TO_WISHLIST = "MOVE_TO_WISHLIST";
// const MOVE_TO_CART = "MOVE_TO_CART";
const initialState = {
  cart: [],
  wishlist: [],
  totalItems: 0,
  totalPrice: 0
};
function reducer(state,action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            const updatedcart=[...state.cart,action.payload];
            const updatedtotalitems=state.totalItems+action.payload.quantity;
            const updatedtotalprice=state.totalPrice+(action.payload.quantity*action.payload.price);
            return {
              ...state,cart:updatedcart,totalItems:updatedtotalitems,totalPrice:updatedtotalprice
            }
        
         default:
            return state
    }

}
const Cart = () => {
    const [name,setName]=useState("");
        const[quantity,setQuantity]=useState(0);
        const[price,setPrice]=useState(0);
      const [state, dispatch] = useReducer(reducer, initialState);
      const addtocart=()=>{
        dispatch({type:ADD_TO_CART,payload:{id:Date.now(),name:name,quantity:quantity,price:price}})
      }
  return (
    <div>
        <label >NAME:</label>
             <input className="w-48 focus:outline-none text-[15px]" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name of product" type="Text"  />
             <label >Quantity:</label>
             <input className="w-33 focus:outline-none text-[15px]" value={quantity}  onChange={(e)=>setQuantity(e.target.value)}placeholder="Enter quantity.." type="number" min='1' step='1'  />
               <label >ADD PRICE:</label>
             <input className="w-33 focus:outline-none text-[15px]"  value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price.." type="number" min='1' step='1'  />
             <button onClick={addtocart}>Add To Cart</button>
             <div>
                {state.cart.map((a)=>(
                    <div>
                        {a.name}
                        </div>
                ))}
             </div>
    </div>
  )
};

export default Cart;
