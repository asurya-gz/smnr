import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anforcom 2022</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;