import React, { useState } from 'react';

const Alert = ({ prop }) => {
  const [text, setText] = useState('lmao');

  const clickHandler = (e) => {
    console.log('Clicked');
    alert(text);
  };

  const changeHandler = (e) => {
    console.log('Changed');
    setText(e.target.value);
  };

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      <input onChange={changeHandler} value={text} />
      <p>{text}</p>
    </>
  );
};

export default Alert;
