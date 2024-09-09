import { useEffect, useRef } from "react";

const useClickOutside = (callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    const clickHandle = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", clickHandle);

    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, [ref]);

  return ref;
};

export default useClickOutside;
