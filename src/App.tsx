import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useEffect } from "react";
import { getThemeHandle, getUserHandle } from "./utils/storeHandle";
import Routes from "./routes/Routes";
import { useTranslation } from "react-i18next";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { i18n } = useTranslation();
  const dir = i18n.dir();

  useEffect(() => {
    getUserHandle();
    getThemeHandle();
  }, []);

  useEffect(() => {
    document.dir = dir;
  }, [dir]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
