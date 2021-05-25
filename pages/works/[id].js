import { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../utill/state.js";
import data from "../../data.js";
// import Link from "next/link";
import Typing from "../../components/Typing";
import Button from "../../components/Button";
import ImgBox from "../../components/ImgBox.jsx";

const workId = () => {
  const router = useRouter();
  const scrollAnimation = useRef();
  const other = useRef();
  const [stop, setStop] = useState();
  const [dom, setDom] = useState();
  const { state, dispatch } = useContext(AppContext);
  const [imgNumber, setImgNumber] = useState(0);
  const [imgCassName, setImgCassName] = useState(false);
  const [typingStart, setTypingStart] = useState(false);
  const [scroll, setScroll] = useState(0);
  const index = state.id === "" ? 0 : state.id;
  const pullData = data[index];
  const title = pullData.title;
  const img = pullData.imgs[imgNumber];
  const discription = pullData.discription;
  const url = pullData.url;
  const tools = pullData.tools;
  const backColor = [
    "#52e075",
    "#1b1bff",
    "#9a9aff",
    "#ca0000",
    "#e01563",
    "#b8b8b8",
    "#b7ff42",
    "#4687de",
  ];

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(scrollY);
    });
    return () => () => {
      return;
    };
  }, []);
  const handleRouteChange = () => {
    setTypingStart(true);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => setTypingStart(false);
  }, []);
  useEffect(handleRouteChange, []);

  const backColorStyle = {
    backgroundColor: backColor[index],
  };
  const scrollStyle = {
    transform: `scale(${(scroll / dom) * 0.3},${(scroll / dom) * 0.3} )`,
  };
  const onClick = (e) => {
    setImgNumber(0);
    setTypingStart(false);
    dispatch({ type: "ADD_ID_STATE", id: e.target.id });
    router.push(`/works/${e.target.name}`, undefined, { replace: true });
  };
  const typeEnd = () => setImgCassName(true);

  useEffect(() => {
    const el = scrollAnimation.current;
    const stopElement = other.current;
    setDom(el.getBoundingClientRect().y);
    setStop(stopElement.getBoundingClientRect().top);
  }, []);

  return (
    <div className='wordId'>
      <section style={backColorStyle} className={`wordId__topView`}>
        <div className={`wordId__topView--top`}>
          {typingStart ? (
            <Typing
              message={title}
              typeEnd
              className={`wordId__topView--top--title`}
              delaySec={60}
              typeEnd={typeEnd}
              speed={34}
            />
          ) : (
            ""
          )}
        </div>
        <div className={`wordId__topView--left`}>
          <img
            src={`/images/${img}`}
            alt={title}
            className={`wordId__topView--left--img`}
            style={{
              transform: `translateY(${scroll * 0.4}px)`,
            }}
          />
        </div>
        <div
          className={`wordId__topView--right`}
          style={{
            transform: `translateY(${scroll * 0.2}px)`,
          }}
        >
          {pullData.imgs.map((img, i) => {
            if (imgNumber === i) {
              <li key={i}></li>;
            } else {
              return (
                <img
                  hidden={!imgCassName}
                  className={"wordId__topView--right--img"}
                  key={i}
                  src={`/images/${img}`}
                  alt={img}
                  onClick={() => setImgNumber(i)}
                  value={i}
                />
              );
            }
          })}
        </div>
      </section>

      <section className='wordId__datasContents'>
        <div
          className='wordId__datasContents--wrapper'
          ref={scrollAnimation}
        >
          <ul className='wordId__datasContents--toolsBox'>
            {tools.map((tool, i) => {
              return (
                <li className='wordId__datasContents--toolsBox--items' key={i}>
                  {tool}
                </li>
              );
            })}
          </ul>
          <div className='wordId__datasContents--titleBox'>
            <h2 className='wordId__datasContents--titleBox--title'>{title}</h2>
          </div>
          <div className='wordId__datasContents--discriptionBox'>
            <p>{discription}</p>
            <Button
              url={url}
              onClick={() => console.log("button click")}
              color={backColor[index]}
              style={
                scroll > stop - state.height
                  ? {
                    position: "absolute", bottom:"-120px",right:"0px"  }
                  : { transform: `translateY(${scroll / 2.3}px)` }
              }
            />
          </div>
        </div>
      </section>

      <section className='wordId__others' ref={other}>
        {data.map((d, i) => {
          if (i === pullData.id - 1) {
            <li key={i}></li>;
          } else {
            return (
              <ImgBox
                onClick={onClick}
                id={i}
                name={d.title}
                src={`/images/${d.imgs[0]}`}
                key={i}
              />
            );
          }
        })}
      </section>
    </div>
  );
};

export default workId;
