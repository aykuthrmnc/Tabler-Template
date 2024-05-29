import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/store";

const ThemeHOC = (Component: React.FunctionComponent) => (props: any) => {
  const theme = useSelector((state: RootState) => state.theme);
  return <Component {...props} theme={theme} />;
};

export default ThemeHOC;
