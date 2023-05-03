import React, { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDate = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.dummyData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDate();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
