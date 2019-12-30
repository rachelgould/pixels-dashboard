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
