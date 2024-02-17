import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "~/components/Loader";
import { Route } from "~/types";

// LAYOUT
const AuthLayout = lazy(() => import("~/layouts/AuthLayout"));
const MainLayout = lazy(() => import("~/layouts/MainLayout"));
const PrivateRoute = lazy(() => import("~/routes/PrivateRoute"));

// AUTH
const Login = lazy(() => import("~/pages/Auth/Login"));
const Register = lazy(() => import("~/pages/Auth/Register"));
const ForgotPassword = lazy(() => import("~/pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("~/pages/Auth/ResetPassword"));

// HOME
const Home = lazy(() => import("~/pages/Home"));

// ERROR
import NotFound from "~/pages/Error/NotFound";
import Error500 from "~/pages/Error/Error500";

// MENUS
import { MENU } from "~/constants/menu";

const routes: Route[] = [
  {
    auth: true,
    layout: true,
    path: "/",
    element: <MainLayout MENU={MENU} isSearch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    layout: true,
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verification",
        element: <ResetPassword />,
      },
    ],
  },

  {
    layout: true,
    name: "notFound",
    path: "*",
    element: <NotFound />,
  },
];

const authCheck = (routes: Route[]) =>
  routes?.map((route: Route) => {
    if (route.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route.children) {
      route.children = authCheck(route.children);
    }
    if (route.layout) {
      route.element = (
        <ErrorBoundary FallbackComponent={() => <Error500 />}>
          <Suspense fallback={<Loader title="Sayfa hazırlanıyor" showLogo={true} />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    } else {
      route.element = (
        <ErrorBoundary FallbackComponent={() => <Error500 />}>
          <Suspense fallback={<Loader title="Sayfa hazırlanıyor" showLogo={true} />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    }
    return route;
  });

const Routes = React.memo(() => <RouterProvider router={createBrowserRouter(authCheck(routes))} />);

export default Routes;
