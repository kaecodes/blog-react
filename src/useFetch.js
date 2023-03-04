import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [isPending, setIsPending] = useState(true); 
  const [error, setError] = useState(null); 

  // Fetching data when the component renders
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json()
        })
        .then((data) => {
          console.log(data); 
          setData(data); 
          setIsPending(false); 
          setError(null); 
        })
        // Catch network error - Connection error
        .catch(err => {
          setIsPending(false); 
          setError(err.message); 
        })
    }, 1000); 
  }, [url]); 

  return { data, isPending, error }
}

export default useFetch; 