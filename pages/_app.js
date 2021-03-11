import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
