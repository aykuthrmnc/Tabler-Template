import { DependencyList, useCallback, useEffect, useRef, useState } from "react";

type DebounceStatus = "pending" | "completed" | "cancelled" | "paused";

const useDebounce = (
  fn: Function,
  {
    ms = 0,
    initialMs,
    timeout: autoCancelTimeout,
    initialRun = true,
  }: { ms: number; initialMs?: number; timeout?: number; initialRun?: boolean },
  deps: DependencyList = [],
): {
  resume: () => void;
  pause: () => void;
  cancel: () => void;
  updateDelay: (value: number) => void;
  ready: boolean | null;
  status: DebounceStatus;
} => {
  const delay = useRef(ms);
  const [status, setStatus] = useState<DebounceStatus>("pending");
  const [ready, setReady] = useState<boolean | null>(false);
  const autoCancel = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paused = useRef(false); // Duraklatma durumu
  const isFirstRender = useRef(true); // İlk render'ı takip etmek için
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callback = useRef(fn);

  // Zamanlayıcıyı sıfırla
  const reset = useCallback(() => {
    if (paused.current) return; // Duraklatıldıysa reset işlemini atla
    setStatus("pending");
    setReady(false);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (autoCancel.current) {
      clearTimeout(autoCancel.current);
    }

    const currentDelay = isFirstRender.current ? (initialMs ?? delay.current) : delay.current;

    timeout.current = setTimeout(() => {
      setStatus("completed");
      setReady(true);
      callback.current();
    }, currentDelay);

    if (autoCancelTimeout) {
      autoCancel.current = setTimeout(() => {
        cancel();
      }, autoCancelTimeout);
    }

    // İlk render tamamlandıktan sonra isFirstRender'ı false yap
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [ms, initialMs, autoCancelTimeout]);

  // Zamanlayıcıyı iptal et
  const cancel = useCallback(() => {
    paused.current = false;
    setStatus("cancelled");
    setReady(null);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (autoCancel.current) {
      clearTimeout(autoCancel.current);
    }
  }, []);

  const pause = useCallback(() => {
    paused.current = true;
    setStatus("paused");
    setReady(null);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (autoCancel.current) {
      clearTimeout(autoCancel.current);
    }
  }, []);

  const resume = useCallback(() => {
    paused.current = false;
    reset();
  }, [reset]);

  const updateDelay = useCallback((newDelay: number) => {
    delay.current = newDelay;
  }, []);

  // Callback fonksiyonunu güncelle
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  // Bağımlılıklar değiştiğinde zamanlayıcıyı sıfırla
  useEffect(() => {
    if (initialRun || !isFirstRender.current) {
      reset();
    } else {
      setStatus("completed");
      setReady(true);
      isFirstRender.current = false; // İlk render'ı işaretle
    }
    return () => {
      paused.current ? pause() : cancel();
    }; // Temizleme işlemi
  }, deps);

  return { resume, cancel, pause, updateDelay, ready, status };
};

export default useDebounce;
