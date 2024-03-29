import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { getThemeHandle, getUserHandle } from "./utils/storeHandle";
import Routes from "./routes/Routes";

const App = () => {
  // const showRoutes = useRoutes(routes);
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    getUserHandle();
    getThemeHandle();
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={5}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />

      <Routes />
    </>
  );
};
export default App;
