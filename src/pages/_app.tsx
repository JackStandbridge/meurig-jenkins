import type { AppProps } from "next/app";

import "@/styles/globals.scss";
import { wrapper } from "@/store";
import { Provider } from "react-redux";
import { SiteContext } from "@/components/Site";

const App = ({ Component, ...rest }: AppProps): JSX.Element => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <SiteContext.Provider value={props.pageProps.site ?? null}>
        <Component {...props.pageProps} />
      </SiteContext.Provider>
    </Provider>
  );
};

export default App;
