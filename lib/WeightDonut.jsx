import React from "react";
import PropTypes from "prop-types";
import { scaleLinear } from "d3-scale";

import "./WeightDonut.scss";

const radius = 100;
const per = 2 * Math.PI * radius;

const WeightDonut = ({ weight, initialWeight, targetWeight }) => {
  const step = initialWeight - targetWeight;
  const dashSpace = 10;
  const dashLength = per / step - dashSpace;
  const EMPTY_DASH = `0 ${dashLength + dashSpace} `;
  const NORMAL_DASH = `${dashLength} ${dashSpace} `;
  const colorScale = scaleLinear()
    .domain([0, step])
    .range(["tomato", "yellowgreen"]);
  const color = colorScale(initialWeight - weight);
  const emptyDashes = initialWeight - weight;
  const strokeDasharray =
    emptyDashes <= step
      ? `${EMPTY_DASH.repeat(emptyDashes)}${NORMAL_DASH.repeat(
          step - emptyDashes
        )}`
      : NORMAL_DASH;

  return (
    <svg>
      <circle
        id="progress"
        r={radius}
        cx="250"
        cy="250"
        fill={color}
        strokeDasharray={strokeDasharray}
      />
      <text id="text" x="250" y="250">
        {weight} KG
      </text>
    </svg>
  );
};

WeightDonut.propTypes = {
  weight: PropTypes.number.isRequired,
  initialWeight: PropTypes.number.isRequired,
  targetWeight: PropTypes.number.isRequired
};

export default WeightDonut;
