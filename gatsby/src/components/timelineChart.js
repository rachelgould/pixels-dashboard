import React from "react";
import "./layout.css";
import { Chart } from "react-google-charts";

const options = {
  title: "Full Mood Timeline",
  curveType: "function",
  legend: { position: "bottom" },
  hAxis: {
    title: 'Entry Date',
  },
  vAxis: {
    title: 'Mood',
    viewWindow: { min: 1, max: 5 }
  }
};

const Timeline = ({ data }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      loader={<div>Loading Chart</div>}
    />
  )
}

export default Timeline
