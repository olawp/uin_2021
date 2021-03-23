import React from "react";
import Todocard from "./Todocard";

const Todogrid = () => (
  <section>
    <h1>My Todos</h1>
    <section id="grid">
      <Todocard />
      <Todocard />
      <Todocard />
      <Todocard />
      <Todocard />
      <Todocard />
    </section>
  </section>
);

export default Todogrid;
