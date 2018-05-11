import React from "react";
import ReactDOM from "react-dom";

import WeightDonut from "../lib/WeightDonut";

const App = () => (
  <WeightDonut weight={104} initialWeight={110} targetWeight={90} />
);

ReactDOM.render(<App />, document.getElementById("root"));
