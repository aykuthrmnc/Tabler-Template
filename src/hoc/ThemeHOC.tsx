import React from "react";
import { useRedux } from "~/hooks";

const ThemeHOC = (Component: React.FunctionComponent) => (props: any) => {
  const { useSelector } = useRedux();
  const theme = useSelector((state) => state.theme);
  return <Component {...props} theme={theme} />;
};

export default ThemeHOC;
