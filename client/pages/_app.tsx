import type { AppProps } from "next/app";
import Header from "../components/layouts/Header/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../store/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
