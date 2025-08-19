import React, { useState,useReducer } from "react";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
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
         const updatedcarts=[...state.cart.items.filter((i)=>i.id!==action.payload)];
         const removeditem=state.cart.items.find((i)=>i.id===action.payload);
         const updatedtotalItem=state.cart.totalItems-removeditem.quantity;
         const updatedtotalPrice=state.cart.totalPrice-(removeditem.quantity*removeditem.price);
         return {
            ...state,
           cart:{
            ...state.cart,
             items:updatedcarts,totalItems:updatedtotalItem,totalPrice:updatedtotalPrice
           }
         }
        case ADD_TO_WISHLIST:
           const product=state.cart.items.find((a)=>a.id===action.payload);
           if(!product) return state;
           return{
            ...state,
            cart:{
              ...state.cart,
              items:state.cart.items.filter((a)=>a.id!==product.id),
              totalItems:state.cart.totalItems-product.quantity,
              totalPrice:state.cart.totalPrice-(product.quantity*product.price)
            },
            wishlist:{
              ...state.wishlist,
              items:[...state.wishlist.items,product],
              totalItems:state.wishlist.totalItems+product.quantity,
              totalPrice:state.wishlist.totalPrice+(product.quantity*product.price)

            }
           }
            case REMOVE_FROM_WISHLIST:
         const updatedcars=[...state.wishlist.items.filter((i)=>i.id!==action.payload)];
         const removeditems=state.wishlist.items.find((i)=>i.id===action.payload);
         const updatedtotalIte=state.wishlist.totalItems-removeditems.quantity;
         const updatedtotalPric=state.wishlist.totalPrice-(removeditems.quantity*removeditems.price);
         return {
            ...state,
           wishlist:{
            ...state.wishlist,
             items:updatedcars,totalItems:updatedtotalIte,totalPrice:updatedtotalPric
           }
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
        if(name==""||quantity==0||price==0)
        {
          alert("enter the required details")
        }
       else
       {
         dispatch({type:ADD_TO_CART,payload:{id:Date.now(),name:name,quantity:quantity,price:price}})
        setName("");
        setQuantity(0);
        setPrice(0);
       }
      } 
      const removefromcart=(id)=>{
        dispatch({type:REMOVE_FROM_CART,payload:id})
      }
      const addtowishlist=(id)=>{
       
        dispatch({type:ADD_TO_WISHLIST,payload:id})
      }
        const removefromwish=(id)=>{
        dispatch({type:REMOVE_FROM_WISHLIST,payload:id})
      }
  return (
    <div className=" h-screen   grid grid-cols-[340px_700px_auto] ">
       <div className=" grid grid-row-2 bg-gray-100 ">
         <div className="flex flex-col bg-gray-100 justify-center pl-3 size-1 w-[300px] border-1 h-59 ml-2 mt-2 ">
          <label  >NAME:</label>
             <input className="w-48  focus:outline-none text-[15px]" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the name of product" type="Text"  />
             <label >Quantity:</label>
             <input className="w-11 ml-8 focus:outline-none text-[15px]" value={quantity}  onChange={(e)=>setQuantity(Number(e.target.value))}placeholder="Enter quantity.." type="number" min='1' step='1'  />
               <label >ADD PRICE:</label>
             <input className="w-11 ml-8 focus:outline-none text-[15px]"  value={price}  onChange={(e)=>setPrice(Number(e.target.value))} placeholder="Enter price.." type="number" min='1' step='1'  />
             <button className="cursor-pointer border-2 w-33 ml-14 rounded-md" onClick={addtocart}>Add To Cart</button>
         </div>
         <div className="flex flex-col w-55 mb-55">
              <h1 className="flex  ml-9" ><span className="uppercase font-semi-bold">TotalItemsinCart:</span><span className="text-green-500">{state.cart.totalItems}</span></h1>
              <h1 className="flex  ml-9"><span className="uppercase font-semi-bold">TotalPriceOfCart:</span><span className="text-red-600">{state.cart.totalPrice}</span></h1>
              <h1 className="flex ml-1" ><span className="uppercase font-semi-bold">TotalItemsinWishList:</span><span className="text-green-500">{state.wishlist.totalItems}</span></h1>
              <h1 className="flex "><span className="uppercase font-semi-bold">TotalPriceOfWishlists:</span><span className="text-red-600">{state.wishlist.totalPrice}</span></h1>
         </div>
       </div>
             <div className="  bg-gray-400 border-1   overflow-scroll ">
              <h1 className="text-4xl ml-50 border-1 w-55 flex items-center justify-center rounded-md border-white">CART ITEMS</h1>
                {state.cart.items.map((a)=>(
                    <div className="h-32 m-2 rounded-md pl-3 border-2 border-white grid grid-cols-2 items-center ">
                      <div>
                          <h1 className="font-semi-bold text-2xl uppercase">    {a.name}</h1>
                          <p className="text-sm"> Quantity:{a.quantity}</p>
                          <p> ₹{a.price}</p>
                      </div>
                        
                     <div className="flex gap-5">
                       <button className="border-1 border-white cursor-pointer rounded-md px-1" onClick={()=>removefromcart(a.id)}>Delete</button>
                      <button className="border-1 border-white  cursor-pointer rounded-md px-1" onClick={()=>addtowishlist(a.id)}>Add to wishlist</button>
                     </div>
                        </div>
                ))}
               
           
             </div>
             <div className="flex flex-col bg-pink-800 text-white">
                <button className="font-bold border-1 w-28 ml-44 mt-2 rounded-md cursor-pointer" onClick={()=>setwish(!wish)}> Wishlist</button>
                {wish?(<div>
                       {
                        state.wishlist.items.length===0?<p>No items added yet:</p>:(
                      <div>
                        {
                                  state.wishlist.items.map((b)=>(
                    <div className="border-1 m-2 rounded-md flex flex-col pl-8 gap-2 pb-1 ">
                        <div>
                          <p className="font-bold">{b.name}</p>
                          <p>Quantity:{b.quantity}</p>
                          <p>${b.price}</p>
                        </div>
                        <button className="border-1 w-22 rounded-md" onClick={()=>removefromwish(b.id)} >Delete</button>
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
