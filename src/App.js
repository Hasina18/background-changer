import React, { useState } from "react";
import "./styles.css"; // Import CSS file

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const changeBackground = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <button className="change-btn" onClick={changeBackground}>
        Change Background 🎨
      </button>
    </div>
  );
};

export default App;


