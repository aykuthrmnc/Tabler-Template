import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "~/store";

const RoleBasedRoute = ({ children, roles, route = "/not-found" }: { children: ReactNode; roles?: string[]; route?: string }) => {
  const userRoles = useSelector((state: RootState) => state.auth.user?.[import.meta.env.VITE_AUTH_ROLE_NAME]);

  if (roles && !roles.every((menuRole) => (Array.isArray(userRoles) ? userRoles?.includes(menuRole) : userRoles === menuRole))) {
    return <Navigate to={route} replace />;
  }

  return children;
};

export default RoleBasedRoute;
