import React, { Fragment } from "react";
import ProductListPage from "./components/ShoppingCart/Pages/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./components/ShoppingCart/Pages/productDetails";
import CartListPage from "./components/ShoppingCart/Pages/CartList";


const App = () => {
  return   <Fragment>
  
      <Routes>
          <Route path="/" element={<ProductListPage/>}/>
              <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
              <Route path="/cart" element={<CartListPage/>}/>
      </Routes>
  </Fragment>
};

export default App;
