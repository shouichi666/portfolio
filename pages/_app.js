import React, { useContext, useEffect, useReduser } from "react";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import { db } from "../firebase/index.js";
import AppWapprer, { AppContext } from "../utill/state.js";

function MyApp({ Component, pageProps }) {

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
