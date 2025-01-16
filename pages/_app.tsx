import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

// These styles apply to every route in the application
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-5Y3EKF1TFS`}
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5Y3EKF1TFS');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
