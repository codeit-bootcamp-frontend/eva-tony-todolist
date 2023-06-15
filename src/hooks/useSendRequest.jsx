import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useSendRequest = () => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendRequest = async ({url, method, headers, body}) => {
    setIsLoadng(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: method || 'GET',
        headers: headers || {},
        body: JSON.stringify(body) || null,
      });
      

      const json = await response.json();
      setData(json);

      if (!response.ok) {
        throw new Error('Request Failed!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadng(false);
    }
  }

  return {
    data,
    sendRequest,
    isLoading,
    error
  };
};

export default useSendRequest;
