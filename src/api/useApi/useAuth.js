import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const Auth = async (url, options) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
        options,
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        }
      );
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.data.email);
      router.push('/dashPage/userList');
      setLoading(false);
    } catch (error) {
      alert('Failed to authenticate. Please try again.');
      setLoading(false);
    }
  };

  return { Auth, loading };
};

export default useAuth;


  