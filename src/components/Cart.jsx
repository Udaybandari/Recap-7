import React, { useState,useReducer } from "react";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
// const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
// const MOVE_TO_WISHLIST = "MOVE_TO_WISHLIST";
// const MOVE_TO_CART = "MOVE_TO_CART";
const initialState = {
  cart:{
          items:[],
         totalItems: 0,
         totalPrice: 0,
  },
  wishlist:{
    items:[],
    totalItems:0,
    totalPrice:0,
  }




};
function reducer(state,action)
{
    switch(action.type)
    {
        case ADD_TO_CART:
            const updatedcartitems=[...state.cart.items,action.payload];
            const updatedtotalitems=state.cart.totalItems+action.payload.quantity;
            const updatedtotalprice=state.cart.totalPrice+(action.payload.quantity*action.payload.price);
            return {
              ...state,
              cart:{
                ...state.cart,
                items:updatedcartitems,totalItems:updatedtotalitems,totalPrice:updatedtotalprice}
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
            const item=state.cart.items.find((i)=>i.id===action.payload)
            const totalprice=state.wishlist.wishtotalprice+item.price;
             const totalQuantity=state.wishlist.wishtotalitems+item.quantity;
             const ItemsTotal=state.totalItems-item.quantity;
         const PriceTotal=state.totalPrice-(item.quantity*item.price);
             const updatedwish=[...state.wishlist,item];

            return {
              ...state,wishlist:updatedwish,wishtotalprice:totalprice, wishtotalitems:totalQuantity ,totalItems:ItemsTotal,totalPrice:PriceTotal
            }

         default:
            return state
    }

}
const Cart = () => {
    const [name,setName]=useState("");
    const [wish,setwish]=useState(false);
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
      const addtowishlist=(id)=>{
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
                <button onClick={()=>setwish(!wish)}>Open Wishlist</button>
                {wish?(<div>
                       {
                        state.wishlist.length===0?<p>No items added yet:</p>:(
                      <div>
                        {
                                  state.wishlist.map((b)=>(
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
