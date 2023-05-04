import React, { useState, useCallback } from "react";

const useHttp = (applyData) => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoadng(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method || "GET",
          headers: requestConfig.headers || {},
          body: JSON.stringify(requestConfig.body) || null,
        });

        const data = await response.json();

        applyData(data);

        if (!response.ok) {
          throw new Error("Request Failed!");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoadng(false);
      }
    },
    [applyData]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
