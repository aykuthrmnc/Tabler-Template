import { ReactNode, useEffect } from "react";
import { useRedux } from ".";
import { setPageTitle } from "~/store/pageTitle";
import { IconType } from "react-icons/lib";

const usePageTitle = (value: {
  title?: string;
  subtitle?: string;
  search?: string;
  linkItems?: {
    label: ReactNode;
    path: string;
    icon?: IconType;
    className?: string;
    isHidden?: boolean;
  }[];
  breadCrumbItems: {
    label: ReactNode;
    subLabel?: ReactNode;
    path: string;
    active?: boolean;
  }[];
}) => {
  const { dispatch } = useRedux();

  useEffect(() => {
    dispatch(setPageTitle(value));

    return () => {
      dispatch(setPageTitle(null));
    };
  }, [dispatch, value]);
};

export default usePageTitle;
