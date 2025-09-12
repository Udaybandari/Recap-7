import React from "react";

const FiterProducts = () => {
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

  return (
    <div>
        <h1>Filter Products</h1>
        <div>
            
        </div>
    </div>
  )
};

export default FiterProducts;
