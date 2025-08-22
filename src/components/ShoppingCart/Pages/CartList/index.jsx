import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../CartTile";

const CartListPage = () => {
  const {cartItems}=useContext(ShoppingCartContext);
  const navigate=useNavigate();
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div  className="grid md:grid-cols-3 gap-8 mt-12">
       <div className="md:col-span-2 space-y-4">
        {
          cartItems?.length?(
              cartItems.map((cartitem)=>(
                <CartTile cartitem={cartitem}/>
              ))
          
          ):(
            <h1>No items added...</h1>
          )
        }
       </div>
      </div>
    </div>
  )
};

export default CartListPage;
