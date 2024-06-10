import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "~/store";

const RoleBasedRoute = ({ children, roles }: { children: React.ReactNode; roles?: string[] }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (roles && !roles.includes(user?.role)) {
    return <Navigate to="/not-found" />;
  }

  return children;
};

export default RoleBasedRoute;
