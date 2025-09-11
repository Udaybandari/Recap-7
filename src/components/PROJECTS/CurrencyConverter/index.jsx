import React, { useEffect, useState } from "react";

const Currency = () => {
    const[amount,setAmount]=useState(1);
    const[fromCurrency,setFromCurrency]=useState("USD");
    const[toCurrency,setToCurrency]=useState("INR");
    const[exchangeRate,setExchangeRate]=useState();
    const[convertedAmount,setConvertedAmount]=useState();
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
    function handleFromCurrencyChange(event) {
    setFromCurrency(event.target.value);
  }
    function handleToCurrencyChange(event) {
    setToCurrency(event.target.value);
  }
  console.log(amount)

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
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
          <option value={"EUR"}>EUR</option>
        </select>

        </div>
        <h1>To</h1>
        <div>
             <div className="input-container">
        <input type="text" value={convertedAmount} readOnly />
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value={"EUR"}>EUR</option>
          <option value={"INR"}>INR</option>
          <option value={"USD"}>USD</option>
        </select>
      </div>
        </div>
    </div>
  )
};

export default Currency;
