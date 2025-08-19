import React, { useMemo, useState } from "react";
import useFetch from "./Customhook";

const CallMemo = () => {
  const [flag, setFlag] = useState(true);
 
const {data,loading,error}=useFetch("https://dummyjson.com/products");
console.log(data)
    function filteredData(getProducts)
    { 
      console.log("filter runs...")
    return getProducts?.length
      ? getProducts.filter((t) => t.price > 10)
      : [];
      
  }
  const memoizedversion=useMemo(()=>filteredData(data?.products),[data?.products])

  return (
    <div className="flex flex-col">
       {flag?  <h1 >Call Memo</h1>:<h1>No Memo</h1>}
      <button onClick={()=>setFlag(prev=>!prev)}>click</button>
      {/* <button onClick={fetchData}>Fetch Data</button> */}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
         {memoizedversion.map((a) => (
        <p key={a.id}>{a.title}</p>
      ))}
    </div>
  );
};

export default CallMemo;
