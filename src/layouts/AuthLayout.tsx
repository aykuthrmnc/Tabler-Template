import { Container } from "react-bootstrap";
import { Navigate, Outlet } from "react-router";
import { useRedux } from "~/hooks";

const AuthLayout = ({ route = "/", userType = "user" }: { route?: string; userType?: "user" | "admin" }) => {
  const { useSelector } = useRedux();
  const user = useSelector((state) => state.auth?.[userType]);

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
