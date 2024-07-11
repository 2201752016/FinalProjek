import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
          {
            headers: {
              apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading };
};

export default useGetData;

