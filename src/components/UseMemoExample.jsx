import React, { useState, useMemo, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseMemoExample = () => {
  const [num, setNum] = useState(0);
  const { theme, themeStyles } = useContext(ThemeContext);

  const slowSquare = (n) => {
    console.log("Calculating square...");
    for (let i = 0; i < 100000000; i++) {} // simulate heavy calc
    return n * n;
  };

  const squaredValue = useMemo(() => slowSquare(num), [num]);

  return (
    <div
      style={{
        ...themeStyles[theme],
        padding: "1rem",
        borderRadius: "10px",
        transition: "all 0.3s ease",
      }}
    >
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      />
      <p>Squared Value: {squaredValue}</p>
    </div>
  );
};

export default UseMemoExample;
