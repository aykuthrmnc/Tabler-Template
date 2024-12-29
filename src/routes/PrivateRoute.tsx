import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { RootState } from "~/store";

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
  const user = useSelector((state: RootState) => state.auth?.[userType]);

  if (!user) {
    return <Navigate to={route} replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
