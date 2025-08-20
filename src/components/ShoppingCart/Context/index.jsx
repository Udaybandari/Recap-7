  //create context
  //provide the state to the context
  //wrap context to root component
  //consume the context using usecontext

import { createContext } from "react";

import useFetch from "../../Practiced/Customhook";
  export const ShoppingCartContext=createContext(null);

  function ShoppingContext({children})
  {
     const {data,loading,error}=useFetch("https://dummyjson.com/products");

    return <ShoppingCartContext.Provider value={{data,loading,error}}>
        {children}
        </ShoppingCartContext.Provider>
  }
  export default ShoppingContext;