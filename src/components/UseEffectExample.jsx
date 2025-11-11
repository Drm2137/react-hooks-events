import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const { theme, themeStyles } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => setData(users));
  }, []);

  return (
    <div style={themeStyles[theme]}>
      <h2>useEffect Example</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExample;
