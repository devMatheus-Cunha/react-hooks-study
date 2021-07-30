import React, { createContext, useContext } from "react";

const ThemeContext = createContext<any>("");

export default function UseContext() {
  return (
    <ThemeContext.Provider value={{ mode: "dark" }}>
      <Button />
    </ThemeContext.Provider>
  );
}

function Button() {
  const { mode } = useContext(ThemeContext);
  return <button>{mode}</button>;
}
