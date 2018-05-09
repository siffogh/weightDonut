import React from "react";

const WeightDonut = () => (
  <svg width="500px" height="500px">
    <circle id="progress" r="100" cx="250" cy="250" />
    <text
      id="text"
      x="250"
      y="250"
      textAnchor="middle"
      fontFamily="DroidSerif, Droid Serif"
      fontSize="20"
      fontWeight="normal"
    >
      110 KG
    </text>
  </svg>
);

export default WeightDonut;
