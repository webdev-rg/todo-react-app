import { Header } from "./components/Header/Header";
import { Todos } from "./components/Todo/Todos";

import React, { useState } from "react";

export const App = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prevActive) => !prevActive);
  };
  return (
    <>
      <Header active={active} toggleActive={toggleActive} />
      <Todos active={active} setActive={setActive} />
    </>
  );
};
