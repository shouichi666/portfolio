import React, { useEffect, useReduser } from "react";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { db } from "../firebase/index.js";
import AppWapprer from "../utill/state.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    db.ref("names").on("value", (data) => {
      console.log(data.val());
    });
  }, []);

  return (
    <AppWapprer>
      <Layout>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </Layout>
    </AppWapprer>
  );
}

export default MyApp;
