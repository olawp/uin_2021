import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const food = ['Pizza', 'Hamburger', 'Coke'];

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');

  return (
    <Wrapper>
      <h1>The magic happens here</h1>
      <MyComponent title="It works!" />
      <Food food={food} />
      <Alert />
    </Wrapper>
  );
};

export default App;
