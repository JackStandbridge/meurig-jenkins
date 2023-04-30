import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import { wrapper } from "@/store";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
