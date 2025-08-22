import React, { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../Context";

const CartTile = ({cartitem}) => {
    const {handleRemoveFromCart, handleAddToCart}=useContext(ShoppingCartContext);
  return <Fragment>
    <div className="grid grid-cols-3 items-start gap-5">
          <div className="col-span-2 flex items-start gap-5">
               <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                 <img src={cartitem?.thumbnail} className="w-full h-full object-contain" alt="" />
               </div>
               <div className="flex flex-col gap-6">
                <h3 className="text-base font-bold text-gray-900" >
                    {cartitem.title}
                </h3> 
                <button 
                onClick={()=>handleRemoveFromCart(cartitem,true)}
                
                className="text-sm w-28 cursor-pointer px-4 rounded-md py-3 bg-black text-white font-extrabold"> 
                   Remove 
                </button>
               </div>
               <div className="ml-auto">
                  <h1 className="text-lg font-bold text-gray-900"> ${cartitem.totalPrice.toFixed(2)}</h1>
                 <p className="mt-2 mb-3 font-bolf text-[16px]"> Quantity:{cartitem.quantity}</p>
                 <div className="mt-3 flex gap-8">
                    <button className="text-2xl  cursor-pointer " onClick={()=>handleRemoveFromCart(cartitem,false)}>-</button>
                    <button   className="text-2xl cursor-pointer" onClick={()=> handleAddToCart(cartitem)}>+</button>
                 </div>
               </div>

          </div>
    </div>
       <hr className="border-gray-500" />
  </Fragment>
};

export default CartTile;
