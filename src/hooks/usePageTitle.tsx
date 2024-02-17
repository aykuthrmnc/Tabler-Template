// @ts-nocheck
import { useEffect, useState } from "react";
import { useRedux } from ".";
import { setPageTitle } from "~/store/layout";

const usePageTitle = (value: {
  title?: string;
  subtitle?: string;
  search?: string;
  link?: string;
  breadCrumb: {
    label: string;
    path: string;
    active?: boolean;
  }[];
}) => {
  const { dispatch } = useRedux();

  const [pageTitle] = useState(value);

  useEffect(() => {
    dispatch(setPageTitle(pageTitle));
  }, [dispatch, pageTitle]);
};

export default usePageTitle;
