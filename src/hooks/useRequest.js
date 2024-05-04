import { useState } from "react";

const useProductRequest = ({ url, method }) => {
  const [loading, setLoading] = useState(false);

  const sendRequest = async (body, custom) => {
    setLoading(true);

    const response = await fetch(url || custom, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    setLoading(false);

    return data;
  };

  return { loading, sendRequest };
};

export default useProductRequest;
