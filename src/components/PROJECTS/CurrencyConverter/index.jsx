import React, { useEffect, useState } from "react";

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
        const calculatedRate = result?.rates[toCurrency];
        setExchangeRate(calculatedRate);
        
    setConvertedAmount((amount * calculatedRate).toFixed(2));

        console.log(result)
    }
     function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    fetchexchangeRate();
  }, [fromCurrency, toCurrency, amount]);
  return (
    <div>
        <h1>Currency Converter</h1>
        <div>
         <input
          value={amount}
          onChange={handleAmountChange}
          type="number"
          name="amount"
          placeholder="Enter Amount"
        />
        </div>
    </div>
  )
};

export default Currency;
