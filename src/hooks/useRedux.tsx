import { TypedUseSelectorHook, useDispatch, useSelector as appSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store";

const useRedux = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useSelector: TypedUseSelectorHook<RootState> = appSelector;
  return { dispatch, useSelector };
};

export default useRedux;
