import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../Context";

const ProductTile = ({ a }) => { 
  const {handleAddToCart,cartItems}=useContext(ShoppingCartContext)
  const navigate=useNavigate();
   function handleNavigateToProductDetailsPage(getCurrentProductId) {
    navigate(`/product-details/${getCurrentProductId}`);
  }
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-square">
        <img src={a?.thumbnail} alt={a?.title}   className="oject-cover w-full h-full transition-all duration-300 group-hover:scale-125"/>
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{a.title}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]"> ${a?.price}</p>
        </div>
         
      </div>
      <button
        onClick={() =>
          handleNavigateToProductDetailsPage(a?.id)
        }
        className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
      >
        View Details
      </button>
       <button
        // disabled={
        //   cartItems.findIndex((item) => item.id === a.id) > -1
        // }
        onClick={() => handleAddToCart(a)}
        className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductTile;