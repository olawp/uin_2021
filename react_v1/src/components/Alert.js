import React, { useState } from 'react';

const Alert = ({ prop }) => {
  const [text, setText] = useState(
    'Denne testen bruker en changehandler. Prøve å endre teksten.'
  );

  const clickHandler = (e) => {
    console.log('Clicked');
    alert(text);
    prop(text);
  };

  const changeHandler = (e) => {
    console.log('Changed');
    setText(e.target.value);
  };

  return (
    <>
      <button onClick={clickHandler} className="btn">
        Click me
      </button>
      <input onChange={changeHandler} value={text} />
      <p>onChange: {text}</p>
    </>
  );
};

export default Alert;
