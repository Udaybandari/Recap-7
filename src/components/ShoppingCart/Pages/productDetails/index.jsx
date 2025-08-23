import React, { useContext } from "react";
import {  useParams } from "react-router-dom";
import useFetch from "../../../Practiced/Customhook";
import { ShoppingCartContext } from "../../Context";

const ProductDetailsPage = () => {
  const {id}=useParams();
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const{handleAddToCart}=useContext(ShoppingCartContext);
if(loading)
{
  return <h1>Loading....</h1>
}
if(!data)
{
  return <h1>Product Not Found...</h1>
}

  return (
    <div>
       <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <img src={data.thumbnail} alt={data.title} />
       
          <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
             {data?.images?.length? 
             data?.images?.map((it)=>(
               <div className="rounded-xl p-4 shadow-md" key={it}>
                   <img src={it}  className="w-24 cursor-pointer"
                        alt="Product secondary image" />
                </div>
             )):null}
          </div>
             </div>
             <div className="lg:col-span-2">
                   <h2 className="text-2xl font-extrabold text-[#333333]">
                    {data.title}
                   </h2>
                   <div>
                    <p className="text-xl font-bold">${data?.price}</p>
                   </div>
                   <div>
                    <button   className=" cursor-pointer mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded" 
                    onClick={handleAddToCart(data)}> Add to cart</button>
                   </div>
             </div>
        </div>
       </div>
    </div>
  )
};

export default ProductDetailsPage;
