import React, { useEffect, useState } from "react";

const FiterProducts = () => {
  const[loading,setLoading]=useState(false);
  const[products,setProducts]=useState([]);
    const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const[FilteredItems,setFilteredItems]=useState([])
    async function fetchProducts() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);
        setFilteredItems(result.products);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
   useEffect(() => {
    fetchProducts();
  }, []);
 const uniqueCategories =
    products && products.length > 0
      ? [...new Set(products.map((productItem) => productItem.category))]
      : [];
  return (
    <div>
        <h1>Filter Products</h1>
      <div className="flex flex-col border-1 h-55 items-center justify-center w-33" >
        {uniqueCategories.map((uniqueCategoryItem) => (
          <button
            onClick={() =>
              setCurrentSelectedCategory(
                currentSelectedCategory !== "" &&
                  currentSelectedCategory === uniqueCategoryItem
                  ? ""
                  : uniqueCategoryItem
              )
            }
            className={`${currentSelectedCategory === uniqueCategoryItem ? 'active' : ''}`}
          >
            {uniqueCategoryItem}
          </button>
        ))}
      </div>
    </div>
  )
};

export default FiterProducts;
