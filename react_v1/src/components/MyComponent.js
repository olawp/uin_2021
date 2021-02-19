import React from 'react';
import Title from './Title'


const MyComponent = ({title}) => {
  return (
    <>
      <h1>My First Component</h1>
      <Title title="It works" />
    </>
  );
};

export default MyComponent;
