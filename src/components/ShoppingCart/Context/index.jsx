import { createContext, useState, useEffect } from "react";
import useFetch from "../../Practiced/Customhook";


export const ShoppingCartContext = createContext(null);

function ShoppingContext({ children }) {
 
  const [cartItems, setCartItems] = useState([]);
  const [productDetails,setproductDetails]=useState(null);
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
    
  function handleAddToCart(getproducts) {
    let existing = [...cartItems];
    const index = existing.findIndex((c) => c.id === getproducts.id);

    if (index === -1) {
      existing.push({
        ...getproducts,
        quantity: 1,
        totalPrice: getproducts?.price,
      });
    } else {
      existing[index] = {
        ...existing[index],
        quantity: existing[index].quantity + 1,
        totalPrice: (existing[index].quantity + 1) * existing[index].price,
      };
    }

    setCartItems(existing);
    localStorage.setItem("cartItems", JSON.stringify(existing));
    
  }

  function handleRemoveFromCart(getProduct, Yes) {
    let existing = [...cartItems];
    const findIndex = existing.findIndex((c) => c.id === getProduct.id);
     
    if (findIndex!==-1) {
      if(Yes)
    {
          existing.splice(findIndex, 1);
    }
  
    else  {
     if(existing[findIndex].quantity>1){
           existing[findIndex]={
      ...existing[findIndex],
    quantity:existing[findIndex].quantity-1,
    totalPrice:(existing[findIndex].quantity-1)*existing[findIndex].price,
     }
     }
     else
    {
      existing.splice(findIndex,1);
    }
  }
     
    }
    

          setCartItems(existing);
    localStorage.setItem("cartItems", JSON.stringify(existing));
  }

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems") || "[]"));
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{ data, loading, error, handleAddToCart, handleRemoveFromCart, cartItems,productDetails,setproductDetails }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingContext;
