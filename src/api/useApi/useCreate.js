import { useState } from 'react';
import axios from 'axios';

const useDelete = () => {
  const [loading, setLoading] = useState(false);

  const deleteData = async (url) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error('Failed to delete:', error);
      setLoading(false);
      throw error;
    }
  };

  return { deleteData, loading };
};

export default useDelete;
