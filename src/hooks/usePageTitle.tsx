import { useEffect } from "react";
import { useRedux } from ".";
import { setPageTitle } from "~/store/pageTitle";
import { PageTitle } from "~/types";

const usePageTitle = (value: PageTitle) => {
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(setPageTitle(value));
    if (value?.documentTitle) {
      document.title = `${import.meta.env.VITE_APP_NAME} | ${value?.documentTitle}`;
    }

    return () => {
      dispatch(setPageTitle(null));
      document.title = import.meta.env.VITE_APP_NAME;
    };
  }, [dispatch, value]);
};

export default usePageTitle;
