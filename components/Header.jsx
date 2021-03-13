import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <Head>
        <title>YOKO</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <div>
          <Link href='/'>
            <a>
              <img src='/logo.png' alt='logo' />
            </a>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <Link href='https://twitter.com/YoKo_Ko_Yo'>
            <a target='_brank' className={styles.navButton}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
          <Link href='https://github.com/shouichi666'>
            <a target='_brank' className={styles.navButton}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>

          {/* <Link href='/'>
            <a className={styles.navButton}>work</a>
          </Link> */}
          {/* <Link href='/about'>
            <a className={styles.navButton}>about</a>
          </Link> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
