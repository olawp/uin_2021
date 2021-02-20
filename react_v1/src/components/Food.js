import React from 'react';

const Food = ({ food }) => (
  <ul>{food && food.map((item, i) => <li key={i}>{item}</li>)}</ul>
);

export default Food;
