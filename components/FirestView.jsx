import React, { useState, useEffect } from "react";
// import NumberEasing from "react-number-easing";
// import styles from '../styles/Home.module.scss';

var intervalId;

const FirstView = () => {
  const [value, setValue] = useState(0);

  const onUpdate = () => {
    const val = Math.floor(Math.random() * 10001);
    setValue(val);
  };

  useEffect(() => {
    intervalId = setInterval(() => onUpdate(), 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='FirstView'>
      <NumberEasing value={value} />
    </div>
  );
};

export default FirstView;
