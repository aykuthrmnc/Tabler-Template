import { useRef } from "react";

const useFullscreen = <T extends Element>() => {
  const ref = useRef<T | null>(null);

  const toggle = () => {
    if (!document.fullscreenElement) {
      ref.current?.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return { ref, toggle };
};

export default useFullscreen;
