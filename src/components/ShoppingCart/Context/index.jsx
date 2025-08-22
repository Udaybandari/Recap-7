  //create context
  //provide the state to the context
  //wrap context to root component
  //consume the context using usecontext

import { createContext, useState,useEffect } from "react";

import useFetch from "../../Practiced/Customhook";
import { useNavigate } from "react-router-dom";
  export const ShoppingCartContext=createContext(null);
     
  function ShoppingContext({children})
  {
     const navigate=useNavigate();
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
      
    }
    else{
      console.log("its coming")
      existing[index]={
         ...existing[index],
         quantity:existing[index].quantity+1,
         totalPrice:(existing[index].quantity+1)*existing[index].price,
      }
    }
  
      setCartItems(existing)
      localStorage.setItem("cartItems", JSON.stringify(existing));
      navigate("/cart");
   }
   console.log(cartItems)
  useEffect(() => {
    
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || []));
  }, []);
    return <ShoppingCartContext.Provider value={{data,loading,error,handleAddToCart,cartItems}}>
        {children}
        </ShoppingCartContext.Provider>
  }
  export default ShoppingContext;