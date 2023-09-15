
import React, { useState, useEffect } from "react";

const useApi1 = () => {
  const [product, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [error, setError] = useState(null);



    const fetchData = async (apiUrl) => {
      setIsLoading(true)
      try {
        const response = await fetch(apiUrl);
        console.log(
          response
        );
        if (!response.ok) {
          // throw new Error("Error fetching data");
          setError(error.message);
          
        }
        const data = await response.json();

        // setTimeout(() => {
          setProductData(data);
                  setIsLoading(false);

          
        // }, 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("please re-enter the api");
                setIsLoading(false);

      }
      // finally{
      //   setIsLoading(false);
      // }
    }
  


  return {
    product,
    isLoading,
    error,
  fetchData
  }
};
export default useApi1