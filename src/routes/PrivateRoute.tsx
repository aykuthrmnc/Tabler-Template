import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "~/store";

const PrivateRoute = ({ children, route = "/login" }: { children: React.ReactNode; route?: string }) => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to={route} replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
