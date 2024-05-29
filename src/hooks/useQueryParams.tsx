import { NavigateOptions, useSearchParams } from "react-router-dom";

const useQueryParams = (key: string, options?: NavigateOptions) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(key) || "";

  const setValue: any = (newValue: any) => {
    newValue ? searchParams.set(key, newValue) : searchParams.delete(key);
    setSearchParams(searchParams, { replace: true, ...options });
  };
  return [value, setValue];
};

export default useQueryParams;
