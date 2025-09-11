import React, { useState } from "react";

const Currency = () => {
    const[amount,setAmount]=useState(1);
    const[fromCurrency,setFromCurrency]=useState("USD");
    const[toCurrency,setToCurrency]=useState("INR");
    const[exchangeRate,setExchangeRate]=useState();
    const[converterAmount,setConvertedAmount]=useState();
    async function fetchexchangeRate(){
        const Response=await fetch(
            `https://open.er-api.com/v6/latest/${fromCurrency}`,
            {
                method:"GET"
            }
        )
        const result=await Response.json();
        console.log(result)
    }
  return (
    <div>
        <h1>Currency Converter</h1>
        <div>
         <button onClick={fetchexchangeRate}>COnsole</button>
        </div>
    </div>
  )
};

export default Currency;
