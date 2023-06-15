import { useState, useCallback, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useHttp = ({url, method, headers, body}) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendRequest = useCallback(async () => {
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
3
      if (!response.ok) {
        throw new Error('Request Failed!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadng(false);
    }
  }, [url, method, headers, body]);

  useEffect(() => {sendRequest()}, [url, method, headers, body, sendRequest])

  return {
    data,
    setData,
    isLoading,
    error,
  };
};

export default useHttp;
