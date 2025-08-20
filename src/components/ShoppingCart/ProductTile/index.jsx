import React from "react";

const ProductTile = ({ a }) => { 
  console.log(a);
  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-square">
        <img src={a?.thumbnail} alt={a?.title} />
        <p>{a?.title}</p>
      </div>
    </div>
  );
};

export default ProductTile;