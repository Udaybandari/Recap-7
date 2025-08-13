import React, { useState,useReducer } from "react";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
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
        case REMOVE_FROM_CART:
         const updatedcarts=[...state.cart.filter((i)=>i.id!==action.payload)];
         const removeditem=state.cart.find((i)=>i.id===action.payload);
         const updatedtotalItem=state.totalItems-removeditem.quantity;
         const updatedtotalPrice=state.totalPrice-(removeditem.quantity*removeditem.price);
         return {
            ...state,cart:updatedcarts,totalItems:updatedtotalItem,totalPrice:updatedtotalPrice
         }
        case ADD_TO_WISHLIST:
            const item=state.cart.find((i)=>i.id===action.payload)
             const updatedwish=[...state.wishlist,item];

            return {
              ...state,cart:updatedwish
            }

         default:
            return state
    }

}
const Cart = () => {
    const [name,setName]=useState("");
    const [wishlish,setwishlist]=useState(false);
        const[quantity,setQuantity]=useState(0);
        const[price,setPrice]=useState(0);
      const [state, dispatch] = useReducer(reducer, initialState);
      const addtocart=()=>{
        dispatch({type:ADD_TO_CART,payload:{id:Date.now(),name:name,quantity:quantity,price:price}})
        setName("");
        setQuantity(0);
        setPrice(0);
      } 
      const removefromcart=(id)=>{
        dispatch({type:REMOVE_FROM_CART,payload:id})
      }
      const addtowishlist=()=>{
        dispatch({type:ADD_TO_WISHLIST,payload:id})
      }
  return (
    <div>
        <label >NAME:</label>
             <input className="w-48 focus:outline-none text-[15px]" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name of product" type="Text"  />
             <label >Quantity:</label>
             <input className="w-33 focus:outline-none text-[15px]" value={quantity}  onChange={(e)=>setQuantity(Number(e.target.value))}placeholder="Enter quantity.." type="number" min='1' step='1'  />
               <label >ADD PRICE:</label>
             <input className="w-33 focus:outline-none text-[15px]"  value={price}  onChange={(e)=>setPrice(Number(e.target.value))} placeholder="Enter price.." type="number" min='1' step='1'  />
             <button onClick={addtocart}>Add To Cart</button>
             <div>
                {state.cart.map((a)=>(
                    <div>
                        {a.name}
                      <button onClick={()=>removefromcart(a.id)}>Delete</button>
                      <button onClick={()=>addtowishlist(a.id)}>Add to wishlish</button>
                        </div>
                ))}
           
             </div>
             <div>
                <button onClick={()=>setwishlist(!wishlish)}>Open Wishlist</button>
                {wishlish?(<div>
                       {
                        state.wishlish.isEmpty()?<p>No items added yet:</p>:(
                      <div>
                        {
                                  state.cart.map((b)=>(
                    <div>
                        {b.name}
                        </div>
                ))
                        }

                  
                      </div>

                        )
                
              }
                </div>):null}
             </div>
    </div>
  )
};

export default Cart;
