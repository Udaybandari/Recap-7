import React from "react";
import UseReducer from "./components/UseReducer";
import UseReducer2 from "./components/UseReducer2";
import AdvancedTodoApp from "./components/AdvancedTodoApp";
import ShoppingCart from "./components/ShoppingCart";
import Cart from "./components/Cart";
import Usref from "./components/Useref";
;
import Us from "./components/Us";
import Simpleref from "./components/simpleref";
import CallMemo from "./components/CallMemo";

const App = () => {
  return (
    <div className="m-22 w-[1400px] h-[600px] border-1 flex flex-col items-center justify-center">
      {/* <UseReducer/>
      <UseReducer2/> 
      <AdvancedTodoApp/>
      <ShoppingCart/> */}
      {/* <Cart/> */}
      {/* <Usref/> */}
  {/* <Us/> */}
  {/* <Simpleref/> */}
  <CallMemo/>
    </div>
  )
};

export default App;
