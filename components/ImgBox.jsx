import React, { useEffect, useRef, useState, useContext } from "react";
import { AppContext } from "../utill/state.js";

const ImgBox = (props) => {
  const ref = useRef();
  const [dom, setDom] = useState();
  const [scroll, setScroll] = useState();
  const { state } = useContext(AppContext);

  useEffect(() => {
    const el = ref.current;
    setDom(el.getBoundingClientRect().y);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(scrollY);
    });
  }, [scroll]);

  return (
    <div className='wordId__others--imgOuter' key={props.id}>
      <img
        src={props.src}
        alt={props.src}
        onClick={props.onClick}
        id={props.id}
        name={props.name}
        className={
          dom < scroll + state.height * 0.9 ? "wordId__others--img" : "hidden"
        }
        ref={ref}
      />
    </div>
  );
};

export default ImgBox;
