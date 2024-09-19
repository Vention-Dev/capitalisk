import { useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const activeHttpRequests = useRef([]); // not a state bc no need to update UI when this info changes

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      let response;
      try {
        response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        }); // if the request throws an error, fetch WILL return a proper response with the error code
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) throw new Error(responseData.message); // goto catch
        return responseData;
      } catch (e) {
        // already logging 404s
        if (response && response.status === 404) return;
        throw e;
      } finally {
      }
    },
    []
  );

  // clean-up
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return {sendRequest};
};
