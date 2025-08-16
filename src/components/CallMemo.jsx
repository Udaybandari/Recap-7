import React, { useMemo, useState } from "react";

const CallMemo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag,setFlag]=useState(false);
  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setData(result);  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
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
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
         {memoizedversion.map((a) => (
        <p key={a.id}>{a.title}</p>
      ))}
    </div>
  );
};

export default CallMemo;
