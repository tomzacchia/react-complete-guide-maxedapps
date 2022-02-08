import { useState } from "react";

function useHttp(requestConfig, applyData) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      /**
       * NOTE: we are able to generalize our http hook by passing in
       * a config object that will specify the fetch method. Additionally
       * any data transformations will be done via a callback, applyData.
       * <App /> and <NewTasks /> have isLoading and error as state,
       * the only difference is that one component makes a GET request,
       * while the other make a POST request
       */
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body),
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
