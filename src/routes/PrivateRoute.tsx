import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "~/store";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
