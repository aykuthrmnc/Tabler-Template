import { lazy, memo, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
import RoleBasedRoute from "./RoleBasedRoute";

const UI = {
  Alerts: lazy(() => import("~/pages/UI/Interface/Alerts")),
  Accordion: lazy(() => import("~/pages/UI/Interface/Accordion")),
  SignIn: lazy(() => import("~/pages/UI/Interface/Authentication/SignIn")),
  SignInLink: lazy(() => import("~/pages/UI/Interface/Authentication/SignInLink")),
  SignInWithIllustration: lazy(() => import("~/pages/UI/Interface/Authentication/SignInWithIllustration")),
  SignInWithCover: lazy(() => import("~/pages/UI/Interface/Authentication/SignInWithCover")),
  SignUp: lazy(() => import("~/pages/UI/Interface/Authentication/SignUp")),
  ForgotPassword: lazy(() => import("~/pages/UI/Interface/Authentication/ForgotPassword")),
  TermsOfService: lazy(() => import("~/pages/UI/Interface/Authentication/TermsOfService")),
  LockScreen: lazy(() => import("~/pages/UI/Interface/Authentication/LockScreen")),
  TwoStepVerification: lazy(() => import("~/pages/UI/Interface/Authentication/TwoStepVerification")),
  TwoStepVerificationCode: lazy(() => import("~/pages/UI/Interface/Authentication/TwoStepVerificationCode")),
  BlankPage: lazy(() => import("~/pages/UI/Interface/BlankPage")),
  Badges: lazy(() => import("~/pages/UI/Interface/Badges")),
  Buttons: lazy(() => import("~/pages/UI/Interface/Buttons")),
  SampleCards: lazy(() => import("~/pages/UI/Interface/Cards/SampleCards")),
  CardActions: lazy(() => import("~/pages/UI/Interface/Cards/CardActions")),
  CardsMasonry: lazy(() => import("~/pages/UI/Interface/Cards/CardsMasonry")),
  Carousel: lazy(() => import("~/pages/UI/Interface/Carousel")),
  Charts: lazy(() => import("~/pages/UI/Interface/Charts")),
  Colors: lazy(() => import("~/pages/UI/Interface/Colors")),
  ColorPicker: lazy(() => import("~/pages/UI/Interface/ColorPicker")),
  DataGrid: lazy(() => import("~/pages/UI/Interface/DataGrid")),
  DataTables: lazy(() => import("~/pages/UI/Interface/DataTables")),
  Dropdowns: lazy(() => import("~/pages/UI/Interface/Dropdowns")),
  Dropzone: lazy(() => import("~/pages/UI/Interface/Dropzone")),
  Page404: lazy(() => import("~/pages/UI/Interface/ErrorPages/Page404")),
  Page500: lazy(() => import("~/pages/UI/Interface/ErrorPages/Page500")),
  MaintenancePage: lazy(() => import("~/pages/UI/Interface/ErrorPages/MaintenancePage")),
  Flags: lazy(() => import("~/pages/UI/Interface/Flags")),
  InlinePlayer: lazy(() => import("~/pages/UI/Interface/InlinePlayer")),
  Lightbox: lazy(() => import("~/pages/UI/Interface/Lightbox")),
  Lists: lazy(() => import("~/pages/UI/Interface/Lists")),
  Modal: lazy(() => import("~/pages/UI/Interface/Modal")),
  Map: lazy(() => import("~/pages/UI/Interface/Map")),
  MapFullsize: lazy(() => import("~/pages/UI/Interface/MapFullsize")),
  MapVector: lazy(() => import("~/pages/UI/Interface/MapVector")),
  Markdown: lazy(() => import("~/pages/UI/Interface/Markdown")),
  Navigation: lazy(() => import("~/pages/UI/Interface/Navigation")),
  Offcanvas: lazy(() => import("~/pages/UI/Interface/Offcanvas")),
  Pagination: lazy(() => import("~/pages/UI/Interface/Pagination")),
  Placeholder: lazy(() => import("~/pages/UI/Interface/Placeholder")),
  Steps: lazy(() => import("~/pages/UI/Interface/Steps")),
  StarsRating: lazy(() => import("~/pages/UI/Interface/StarsRating")),
  Tabs: lazy(() => import("~/pages/UI/Interface/Tabs")),
  Tags: lazy(() => import("~/pages/UI/Interface/Tags")),
  Tables: lazy(() => import("~/pages/UI/Interface/Tables")),
  Typography: lazy(() => import("~/pages/UI/Interface/Typography")),
  TinyMCE: lazy(() => import("~/pages/UI/Interface/TinyMCE")),
  FormElements: lazy(() => import("~/pages/UI/FormElements")),
  EmptyPage: lazy(() => import("~/pages/UI/Extra/EmptyPage")),
  CookieBanner: lazy(() => import("~/pages/UI/Extra/CookieBanner")),
  Chat: lazy(() => import("~/pages/UI/Extra/Chat")),
  Activity: lazy(() => import("~/pages/UI/Extra/Activity")),
  Gallery: lazy(() => import("~/pages/UI/Extra/Gallery")),
  Invoice: lazy(() => import("~/pages/UI/Extra/Invoice")),
  SearchResults: lazy(() => import("~/pages/UI/Extra/SearchResults")),
  PricingCards: lazy(() => import("~/pages/UI/Extra/PricingCards")),
  PricingTable: lazy(() => import("~/pages/UI/Extra/PricingTable")),
  FAQ: lazy(() => import("~/pages/UI/Extra/FAQ")),
  Users: lazy(() => import("~/pages/UI/Extra/Users")),
  License: lazy(() => import("~/pages/UI/Extra/License")),
  Logs: lazy(() => import("~/pages/UI/Extra/Logs")),
  Music: lazy(() => import("~/pages/UI/Extra/Music")),
  Photogrid: lazy(() => import("~/pages/UI/Extra/Photogrid")),
  Settings: lazy(() => import("~/pages/UI/Extra/Settings")),
  Tasks: lazy(() => import("~/pages/UI/Extra/Tasks")),
  UptimeMonitor: lazy(() => import("~/pages/UI/Extra/UptimeMonitor")),
  Widgets: lazy(() => import("~/pages/UI/Extra/Widgets")),
  Wizard: lazy(() => import("~/pages/UI/Extra/Wizard")),
  TrialEnded: lazy(() => import("~/pages/UI/Extra/TrialEnded")),
  JobListing: lazy(() => import("~/pages/UI/Extra/JobListing")),
  PageLoader: lazy(() => import("~/pages/UI/Extra/PageLoader")),
};

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
  {
    path: "ui",
    element: <Outlet />,
    children: [
      {
        layout: true,
        element: <MainLayout MENU={UIMENU} />,
        children: [
          {
            index: true,
            element: <HomeUI />,
          },
          {
            path: "alerts",
            element: <UI.Alerts />,
          },
          {
            path: "accordion",
            element: <UI.Accordion />,
          },
          {
            path: "blankpage",
            element: <UI.BlankPage />,
          },
          {
            path: "badges",
            element: <UI.Badges />,
          },
          {
            path: "buttons",
            element: <UI.Buttons />,
          },
          {
            path: "samplecards",
            element: <UI.SampleCards />,
          },
          {
            path: "cardactions",
            element: <UI.CardActions />,
          },
          {
            path: "cardsmasonry",
            element: <UI.CardsMasonry />,
          },
          {
            path: "carousel",
            element: <UI.Carousel />,
          },
          {
            path: "charts",
            element: <UI.Charts />,
          },
          {
            path: "colors",
            element: <UI.Colors />,
          },
          {
            path: "colorpicker",
            element: <UI.ColorPicker />,
          },
          {
            path: "datagrid",
            element: <UI.DataGrid />,
          },
          {
            path: "datatables",
            element: <UI.DataTables />,
          },
          {
            path: "dropdowns",
            element: <UI.Dropdowns />,
          },
          {
            path: "dropzone",
            element: <UI.Dropzone />,
          },
          {
            path: "flags",
            element: <UI.Flags />,
          },
          {
            path: "inlineplayer",
            element: <UI.InlinePlayer />,
          },
          {
            path: "lightbox",
            element: <UI.Lightbox />,
          },
          {
            path: "lists",
            element: <UI.Lists />,
          },
          {
            path: "modal",
            element: <UI.Modal />,
          },
          {
            path: "map",
            element: <UI.Map />,
          },
          {
            path: "mapfullsize",
            element: <UI.MapFullsize />,
          },
          {
            path: "mapvector",
            element: <UI.MapVector />,
          },
          {
            path: "markdown",
            element: <UI.Markdown />,
          },
          {
            path: "navigation",
            element: <UI.Navigation />,
          },
          {
            path: "offcanvas",
            element: <UI.Offcanvas />,
          },
          {
            path: "pagination",
            element: <UI.Pagination />,
          },
          {
            path: "placeholder",
            element: <UI.Placeholder />,
          },
          {
            path: "steps",
            element: <UI.Steps />,
          },
          {
            path: "starsrating",
            element: <UI.StarsRating />,
          },
          {
            path: "tabs",
            element: <UI.Tabs />,
          },
          {
            path: "tags",
            element: <UI.Tags />,
          },
          {
            path: "tables",
            element: <UI.Tables />,
          },
          {
            path: "typography",
            element: <UI.Typography />,
          },
          {
            path: "tinymce",
            element: <UI.TinyMCE />,
          },
          {
            path: "formelements",
            element: <UI.FormElements />,
          },
          {
            path: "emptypage",
            element: <UI.EmptyPage />,
          },
          {
            path: "cookiebanner",
            element: <UI.CookieBanner />,
          },
          {
            path: "chat",
            element: <UI.Chat />,
          },
          {
            path: "activity",
            element: <UI.Activity />,
          },
          {
            path: "gallery",
            element: <UI.Gallery />,
          },
          {
            path: "invoice",
            element: <UI.Invoice />,
          },
          {
            path: "searchresults",
            element: <UI.SearchResults />,
          },
          {
            path: "pricingcards",
            element: <UI.PricingCards />,
          },
          {
            path: "pricingtable",
            element: <UI.PricingTable />,
          },
          {
            path: "faq",
            element: <UI.FAQ />,
          },
          {
            path: "users",
            element: <UI.Users />,
          },
          {
            path: "license",
            element: <UI.License />,
          },
          {
            path: "logs",
            element: <UI.Logs />,
          },
          {
            path: "music",
            element: <UI.Music />,
          },
          {
            path: "photogrid",
            element: <UI.Photogrid />,
          },
          {
            path: "tasks",
            element: <UI.Tasks />,
          },
          {
            path: "uptimemonitor",
            element: <UI.UptimeMonitor />,
          },
          {
            path: "widgets",
            element: <UI.Widgets />,
          },
          {
            path: "settings",
            element: <UI.Settings />,
          },
          {
            path: "joblisting",
            element: <UI.JobListing />,
          },
        ],
      },
      {
        path: "auth",
        element: (
          <div className="page page-center min-vh-100">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "signin",
            element: <UI.SignIn />,
          },
          {
            path: "signinlink",
            element: <UI.SignInLink />,
          },
          {
            path: "signinwithillustration",
            element: <UI.SignInWithIllustration />,
          },
          {
            path: "signinwithcover",
            element: <UI.SignInWithCover />,
          },
          {
            path: "signup",
            element: <UI.SignUp />,
          },
          {
            path: "forgotpassword",
            element: <UI.ForgotPassword />,
          },
          {
            path: "termsofservice",
            element: <UI.TermsOfService />,
          },
          {
            path: "lockscreen",
            element: <UI.LockScreen />,
          },
          {
            path: "twostepverification",
            element: <UI.TwoStepVerification />,
          },
          {
            path: "twostepverificationcode",
            element: <UI.TwoStepVerificationCode />,
          },
        ],
      },
      {
        path: "errorpages",
        element: (
          <div className="border-primary border-top-wide d-flex flex-column flex-fill justify-content-center">
            <div className="page page-center min-vh-100">
              <Outlet />
            </div>
          </div>
        ),
        children: [
          {
            path: "page404",
            element: <UI.Page404 />,
          },
          {
            path: "page500",
            element: <UI.Page500 />,
          },
          {
            path: "maintenancepage",
            element: <UI.MaintenancePage />,
          },
        ],
      },
      {
        path: "extrapages",
        element: (
          <div className="page page-center flex-fill">
            <Outlet />
          </div>
        ),
        children: [
          {
            path: "wizard",
            element: <UI.Wizard />,
          },
          {
            path: "trialended",
            element: <UI.TrialEnded />,
          },
          {
            path: "pageloader",
            element: <UI.PageLoader />,
          },
        ],
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
      route.element = (
        <PrivateRoute route={route?.returnPath} userType={route?.userType}>
          {route.element}
        </PrivateRoute>
      );
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
