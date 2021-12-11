import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  async function fetchdata() {
    try {
      const moviesData = await axios.get(url);
      setData(moviesData.data);
      setLoading(false);   
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return {error, data, loading};
}

export default useFetch;