const BASE_URL = import.meta.env.VITE_BASE_URL;

const sendRequest = async ({ url, method, headers, body }) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: method || 'GET',
    headers: headers || {},
    body: JSON.stringify(body) || null,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error('Request Failed!');
  }

  return json;
};


export default sendRequest