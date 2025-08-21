  //create context
  //provide the state to the context
  //wrap context to root component
  //consume the context using usecontext

import { createContext, useState } from "react";

import useFetch from "../../Practiced/Customhook";
  export const ShoppingCartContext=createContext(null);
 
  function ShoppingContext({children})
  {
       const[cartItems,setCartItems]=useState([]);
     const {data,loading,error}=useFetch("https://dummyjson.com/products");
   
     function handleAddToCart(getproducts)
   { 

   
    let existing=[...cartItems];
   const index = existing.findIndex((c) => c.id === getproducts.id);


 
    if(index==-1)
    {
      existing.push({
        ...getproducts,
        quantity:1,
        totalPrice:getproducts?.price,
      });
          console.log(existing)
    }
    else{
      console.log("its coming")
    }

   }
   

    return <ShoppingCartContext.Provider value={{data,loading,error,handleAddToCart,cartItems}}>
        {children}
        </ShoppingCartContext.Provider>
  }
  export default ShoppingContext;