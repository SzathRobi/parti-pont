import "../css/style.scss";
import "../css/form.css";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Common/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <Header />
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
