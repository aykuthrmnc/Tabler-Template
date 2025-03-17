import React from "react";
import { Navigate, useLocation } from "react-router";
import { useRedux } from "~/hooks";

const PrivateRoute = ({
  children,
  route = "/login",
  userType = "user",
}: {
  children: React.ReactNode;
  route?: string;
  userType?: "user" | "admin";
}) => {
  const location = useLocation();
  const { useSelector } = useRedux();
  const user = useSelector((state) => state.auth?.[userType]);

  if (!user) {
    return <Navigate to={route} replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
