import { AppProps } from "next/app";
import "@/assets/css/bootstrap.min.css";

// Global CSS
import "@/assets/css/global.css";
import "@/assets/css/header.css";
import "@/assets/css/footer.css";

// Page Specific CSS
import "@/assets/css/chatbord.css";
import "@/assets/css/chatbord-responsive.css";
import "@/assets/css/secttings.css";
import "@/assets/css/settings-responsive.css";
import "@/assets/css/login.css";
import "@/assets/css/login-responsive.css";
import "@/assets/css/newchatbot.css";
import "@/assets/css/rechatbot.css";

import "@/assets/css/backbtn.css";
import "@/assets/css/chatbotdemo.css";
import "@/assets/css/dashboard.css";
import "@/assets/css/chatbotsetting.css";
import "@/assets/css/chatinterface.css";
import "@/assets/css/chatinterface-responsive.css";
import "@/assets/css/embed.css";
import "@/assets/css/delete.css";
import "@/assets/css/share.css";

// Files
import useToggle from "@/hooks/useToggle";
import { SideMenuContext } from "@/context";
import { wrapper } from "@/store";
import { Provider } from "react-redux";
import { WrappedBuildError } from "next/dist/server/base-server";
import { store } from "../redux/store";

const App = ({ Component, pageProps }: AppProps) => {
  const { isOpen, onToggle } = useToggle();

  const value = {
    isSideMenuVisible: isOpen,
    toggleSideMenu: onToggle,
  };

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(App);
