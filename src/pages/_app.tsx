import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { wrapper, store } from "@/store";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default wrapper.withRedux(App);
