import React, { useState, useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const List = React.memo(({ getItems, themeStyles, theme }) => {
  return (
    <ul style={themeStyles[theme]}>
      {getItems().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

const UseCallbackExample = () => {
  const [number, setNumber] = useState(1);
  const { theme, themeStyles } = useContext(ThemeContext);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div
      style={{
        ...themeStyles[theme],
        padding: "1rem",
        borderRadius: "10px",
        transition: "all 0.3s ease",
      }}
    >
      <h2>useCallback Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <List getItems={getItems} themeStyles={themeStyles} theme={theme} />
    </div>
  );
};

export default UseCallbackExample;
