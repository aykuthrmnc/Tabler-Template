import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useAxios = (url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url, { method: "get", ...config })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useAxios;
