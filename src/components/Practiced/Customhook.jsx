import React, { useEffect, useState } from "react";

const useFetch = (url,options={}) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    async function fetchData(){
        setLoading(true);
        try{
            const response=await fetch(url,{...options});
            if(!response.ok)
            {
               throw new Error(Response.statusText||"fetch error");
            }
            const result=await response.json();
            if(result)
            {
                
                setData(result?.products);
                setError(null);
                setLoading(false);
            }
        }
        catch(error)
        {
          setLoading(false) ;
          setError(error) ;

        }

    }
    useEffect(()=>{fetchData()},[url]);
return {data,error,loading};
};

export default useFetch