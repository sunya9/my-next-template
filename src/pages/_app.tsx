import type { AppProps } from "next/app";
import Head from "next/head";
import pkg from "../../package.json";
import "../styles/globals.css";

const MyApp: React.VFC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>{pkg.name}</title>
        <meta name="description" content={pkg.description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
