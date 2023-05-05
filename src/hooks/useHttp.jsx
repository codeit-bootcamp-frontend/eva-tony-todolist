import React, { useState, useCallback, useRef } from "react";
import { parseObjectToList } from "@library/parseObjectToList";

const useHttp = () => {
  const [isLoading, setIsLoadng] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  let postIdRef = useRef();

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

      const temp = [...parseObjectToList(objData)];
      setData(temp);

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
    postIdRef,
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
