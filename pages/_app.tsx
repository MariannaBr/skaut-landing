import { AppProps } from "next/app";
import Head from "next/head";

// These styles apply to every route in the application
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
