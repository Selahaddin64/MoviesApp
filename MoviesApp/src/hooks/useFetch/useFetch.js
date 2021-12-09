import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetcdata = async () => {
    try {
      const {data: movieData} = await axios.get(url);
      setData(movieData.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetcdata();
  }, []);

  return {error, data, loading};
}

export default useFetch;
