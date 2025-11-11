import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const { theme, themeStyles } = useContext(ThemeContext);

  return (
    <div style={themeStyles[theme]}>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default UseStateExample;
