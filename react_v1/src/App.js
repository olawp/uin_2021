import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');

  const updateChild = (data) => {
    setInputFromChild(data);
  };

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <MyComponent title="It works!" />
      <p>Foodlist fra App.js:</p>
      {food && food.map((item, i) => <li key={i}>{item}</li>)}
      <p>Foodlist fra Food komponent:</p>
      <Food food={food} />
      <Alert prop={updateChild} />
      <p>State som endres ved klikk av knapp: {inputFromChild}</p>
    </Wrapper>
  );
};

export default App;
