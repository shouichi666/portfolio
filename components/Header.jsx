import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";

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
              <Image src='/../public/logo.jpg' width='90px' height='40px' />
            </a>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <Link href='/work'>
            <a className={styles.navButton}>work</a>
          </Link>
          <Link href='/about'>
            <a className={styles.navButton}>about</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
