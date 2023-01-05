import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Header from "../components/layouts/Header/Header";
import GlobalStyle from "../styles/GlobalStyle";
import { Provider } from "react-redux";
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
