import { useEffect, useRef } from "react";

const useClickOutsideMultiple = (callback: any, options = { numberOfRefs: 1 }) => {
  const refs = Array.from({ length: options?.numberOfRefs }, () => useRef(null));

  useEffect(() => {
    const clickHandle = (e: any) => {
      // @ts-ignore
      if (refs.every((ref) => ref.current && !ref.current.contains(e.target))) {
        callback();
      }
    };

    document.addEventListener("click", clickHandle);

    return () => {
      document.removeEventListener("click", clickHandle);
    };
  }, [refs]);

  return refs;
};

export default useClickOutsideMultiple;
