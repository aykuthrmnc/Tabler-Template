import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "~/store";

const AdminRoute = ({ children, route = "/admin/login" }: { children: React.ReactNode; route?: string }) => {
  const location = useLocation();
  const admin = useSelector((state: RootState) => state.auth.admin);

  if (!admin) {
    return <Navigate to={route} replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default AdminRoute;
