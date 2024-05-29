import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "~/store";

const AuthLayout = ({ route = "/", userType = "user" }: { route?: string; userType?: "user" | "admin" }) => {
  const user = useSelector((state: RootState) => state.auth?.[userType]);

  if (user) {
    return <Navigate to={route} replace={true} />; // location.state?.return_url
  }

  return (
    <div className="page page-center min-vh-100">
      <Container className="container-tight py-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default AuthLayout;
