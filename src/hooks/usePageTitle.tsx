import { useEffect } from "react";
import { useRedux } from ".";
import { PageTitle, setPageTitle } from "~/store/pageTitle";

const usePageTitle = (value: PageTitle) => {
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(setPageTitle(value));
    if (value?.title) {
      document.title = `${import.meta.env.VITE_APP_NAME} | ${value?.title}`;
    }

    return () => {
      dispatch(setPageTitle(null));
      document.title = import.meta.env.VITE_APP_NAME;
    };
  }, [dispatch, value]);
};

export default usePageTitle;
