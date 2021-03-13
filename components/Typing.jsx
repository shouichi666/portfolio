import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Typing = ({
  message,
  typeEnd,
  cursor = true,
  className = "",
  speed,
  delaySec,
}) => {
  const [text, setText] = useState("");
  const msgEl = useRef();

  // 指定された間隔でstateを更新する
  useEffect(() => {
    // マウント時の処理
    const charItr = message[Symbol.iterator]();
    let delay;
    let timerId;

    function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        typeEnd();
        return;
      }
      setText((current) => current + nextChar.value);
      timerId = setTimeout(showChar, speed);
    }

    (function start() {
      delay = setTimeout(showChar, delaySec);
    })();

    // アンマウント時に念のためタイマー解除
    return () => {
      clearTimeout(timerId);
      clearTimeout(delay);
    };
  }, []);

  // レンダリングのたびに表示エリアをスクロールする
  useEffect(() => {
    const el = msgEl.current;
    if (el.clientHeight < el.scrollHeight) {
      el.scrollTop = el.scrollHeight - el.clientHeight;
    }
  });

  return (
    <div
      className={className + (cursor ? " cursor-blink" : "")}
      style={{ whiteSpace: "pre-line" }}
      ref={msgEl}
    >
      {text}
    </div>
  );
};

Typing.propTypes = {
  message: PropTypes.string.isRequired,
  typeEnd: PropTypes.func.isRequired,
  cursor: PropTypes.bool,
  className: PropTypes.string,
  speed: PropTypes.number,
};
export default Typing;
