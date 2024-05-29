import ReactDOM from "react-dom/client";
import App from "~/App";
import { Provider } from "react-redux";
import store from "~/store";
import "~/assets/scss/theme.scss";
import "~/assets/js/tabler.esm.min";
// import "~/assets/js/tabler.min";
import "~/utils/axios";
import "~/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
