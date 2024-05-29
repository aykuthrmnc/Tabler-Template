import { lazy, memo, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "~/components/Custom/ErrorBoundary";
import Loader from "~/components/Loader";
import { Route } from "~/types";

// LAYOUT
const AuthLayout = lazy(() => import("~/layouts/AuthLayout"));
const MainLayout = lazy(() => import("~/layouts/MainLayout"));
const PrivateRoute = lazy(() => import("~/routes/PrivateRoute"));

// AUTH
const Login = lazy(() => import("~/pages/Auth/Login"));
const Register = lazy(() => import("~/pages/Auth/Register"));
// const ForgotPassword = lazy(() => import("~/pages/Auth/ForgotPassword"));
// const ResetPassword = lazy(() => import("~/pages/Auth/ResetPassword"));

// HOME
const Home = lazy(() => import("~/pages/Home"));
// const Profile = lazy(() => import("~/pages/Profile"));

// SETTING
const Settings = lazy(() => import("~/pages/Setting"));
const SettingsAccount = lazy(() => import("~/pages/Setting/Account"));
const ChangePassword = lazy(() => import("~/pages/Setting/ChangePassword"));
const Company = lazy(() => import("~/pages/Setting/Company"));

// UI
const HomeUI = lazy(() => import("~/pages/UI/Home"));

// ERROR
import NotFound from "~/pages/Error/NotFound";
import Error500 from "~/pages/Error/Error500";

// MENUS
import { MENU, UIMENU } from "~/constants/menu";

const routes: Route[] = [
  {
    auth: true,
    layout: true,
    path: "/",
    element: <MainLayout MENU={MENU} />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            index: true,
            element: <SettingsAccount />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "company",
            element: <Company />,
          },
        ],
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
      // {
      //   path: "forgot-password",
      //   element: <ForgotPassword />,
      // },
      // {
      //   path: "verification",
      //   element: <ResetPassword />,
      // },
    ],
  },
  {
    layout: true,
    path: "/ui",
    element: <MainLayout MENU={UIMENU} />,
    children: [
      {
        index: true,
        element: <HomeUI />,
      },
      // {
      //   path: "settings",
      //   element: <Settings />,
      //   children: [
      //     {
      //       index: true,
      //       element: <SettingsAccount />,
      //     },
      //     {
      //       path: "change-password",
      //       element: <ChangePassword />,
      //     },
      //     {
      //       path: "company",
      //       element: <Company />,
      //     },
      //   ],
      // },
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
      route.element = <PrivateRoute route={route?.returnPath}>{route.element}</PrivateRoute>;
    }
    if (route.children) {
      route.children = authCheck(route.children);
    }
    if (route.layout) {
      route.element = (
        <ErrorBoundary fallback={() => <Error500 isLayout />}>
          <Suspense fallback={<Loader title="Sayfa hazırlanıyor" showLogo={true} />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    } else {
      route.element = (
        <ErrorBoundary fallback={() => <Error500 />}>
          <Suspense fallback={<Loader title="Sayfa hazırlanıyor" showLogo={true} />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    }
    return route;
  });

const Routes = memo(() => <RouterProvider router={createBrowserRouter(authCheck(routes))} />);

export default Routes;
