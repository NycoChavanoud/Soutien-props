import React from "react";
import "./Cube.css";

const Cube = ({ name, color, rounded, width, height }) => {
  return (
    <div
      className="cube"
      style={{
        width: width,
        height: height,
        borderRadius: rounded ? "50%" : "0",
        backgroundColor: color,
      }}
    >
      <div>{name}</div>
    </div>
  );
};

export default Cube;
