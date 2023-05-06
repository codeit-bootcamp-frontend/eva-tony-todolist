import React, { useState, useCallback } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useHttp = (applyData) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoadng(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}${requestConfig.url}`, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: JSON.stringify(requestConfig.body) || null,
      });

      const json = await response.json();
      console.log("json", json);
      applyData(json);

      if (!response.ok) {
        throw new Error("Request Failed!");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadng(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
