import React from "react";

const getData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${requestConfig.url}`, {
      method: requestConfig.method || "GET",
      headers: requestConfig.headers || {},
      body: JSON.stringify(requestConfig.body) || null,
    });

    if (!response.ok) {
      throw new Error("Request Failed!");
    }
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(false);
  }
};

export default getData;
