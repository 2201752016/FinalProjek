import { useState } from 'react';
import axios from 'axios';

const useUpdate = () => {
  const [loading, setLoading] = useState(false);

  const update = async (url, options) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
        options,
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error('Failed to update:', error);
      setLoading(false);
      throw error;
    }
  };

  return { update, loading };
};

export default useUpdate;

  