import React from "react";
import { Navigate, useLocation } from "react-router";
import { useRedux } from "~/hooks";

const AdminRoute = ({ children, route = "/admin/login" }: { children: React.ReactNode; route?: string }) => {
  const location = useLocation();
  const { useSelector } = useRedux();
  const admin = useSelector((state) => state.auth.admin);

  if (!admin) {
    return <Navigate to={route} replace state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default AdminRoute;
