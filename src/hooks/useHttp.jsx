import React, { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const sendRequest = useCallback(async (requestConfig) => {
    setIsLoadng(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        headers: requestConfig.headers || {},
        body: JSON.stringify(requestConfig.body) || null,
      });

      const objData = await response.json();

      let loadedDotDates = [];
      for (let key in objData) {
        loadedDotDates.push(objData[key]);
      }

      setData(loadedDotDates);

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
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
