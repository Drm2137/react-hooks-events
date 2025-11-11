import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const EventHandlingExample = () => {
  const { theme, themeStyles } = useContext(ThemeContext);

  const handleClick = (e) => {
    alert(`Button clicked: ${e.target.name}`);
  };

  return (
    <div style={themeStyles[theme]}>
      <h2>Event Handling Example</h2>
      <button name="Primary Button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default EventHandlingExample;
