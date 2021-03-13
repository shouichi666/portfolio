import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Typing from "../components/Typing";
import datas from "../data.js";
import { AppContext } from "../utill/state.js";

const text1 = "はじめまして。横山翔一です。";
const text2 =
  "御覧頂き有難う御座います。未経験からフロントエンドエンジニアを目指し勉強しています。";
const text3 = "このサイトはNext.jsを使って製作いたしました。";

const Home = () => {
  const { dispatch } = useContext(AppContext);
  const [view, setView] = useState(false);
  const [scroll, setScroll] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = window.innerHeight;
    dispatch({ type: "SET_WINDOW_HEIGHT", height: h });
  }, []);
  const jumpWork = () => {
    const windowHeight = window.innerHeight;
    scrollTo({ top: windowHeight, left: 0, behavior: "smooth" });
  };
  const typeNotEnd = () => setView(false);
  const typeEnd = () => setView(true);
  const onClick = (e) =>
    dispatch({ type: "ADD_ID_STATE", id: e.target.name - 1 });
  const onScroll = () => {
    const Height = window.innerHeight;
    document.addEventListener("scroll", () => {
      setScroll((Height - scrollY * 1.6) / Height);
    });
  };
  useEffect(() => {
    onScroll();
    return () => () => {
      return;
    };
  }, [scroll]);

  const scrollStyles = {
    opacity: `${scroll}`,
    transform: `perspective(500px) 
    translate3d( 0px ,${scroll * 200 - 200}px ,${scroll * 200 - 200}px)`,
  };
  const TrakingStringStyles = {
    transform: `rotateX(${x * 0.02}deg)
       rotatey(${y * 0.02}deg)
       rotateZ(${x * -0.001}deg)`,
  };

  const getMouseCoordinates = (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setX(e.clientX - w / 2);
    setY(e.clientY - h / 2);
  };

  return (
    <>
      <section className={styles.firstView} onMouseMove={getMouseCoordinates}>
        <div className={styles.myNameWrapper} style={scrollStyles}>
          <span className={styles.myName} style={TrakingStringStyles}>
            HI!
          </span>
          <span className={styles.myName} style={TrakingStringStyles}>
            I'M{" "}
          </span>
          <span className={styles.myName} style={TrakingStringStyles}>
            SHOUICHI YOKOYAMA
          </span>
          <div className={styles.typingWrapper}>
            <Typing
              message={text1}
              className={`${styles.typing} typing`}
              delaySec={900}
              typeEnd={typeNotEnd}
              speed={20}
            />
            <Typing
              message={text2}
              className={`${styles.typing} typing`}
              delaySec={1200}
              typeEnd={typeEnd}
              speed={10}
            />
            <Typing
              message={text3}
              className={`${styles.typing} typing`}
              delaySec={1900}
              typeEnd={typeEnd}
              speed={30}
            />
          </div>
        </div>
        <span
          className={view ? styles.slideIn : styles.before}
          onClick={jumpWork}
        >
          List of Works
        </span>
      </section>
      <section className={styles.grid}>
        {datas.map((data, i) => {
          return (
            <Link as={`/works/${data.title}`} href={`/works/[id]`} key={i}>
              <a
                onClick={onClick}
                className={`${styles.link} link`}
                name={data.id}
              >
                <div className={`${styles.hover}  hover`} name={data.id}>
                  <img src={`/images/${data.imgs[0]}`} name={data.id} />
                </div>
                <span className='data_title' name={data.id}>
                  {data.title}
                </span>
              </a>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Home;
