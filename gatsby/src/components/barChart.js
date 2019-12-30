import React from "react";
import "./layout.css";
import { Chart } from "react-google-charts";

const filterMonths = data => {
  let months = {
    1: [0,0,0,0,0],
    2: [0,0,0,0,0],
    3: [0,0,0,0,0],
    4: [0,0,0,0,0],
    5: [0,0,0,0,0],
    6: [0,0,0,0,0],
    7: [0,0,0,0,0],
    8: [0,0,0,0,0],
    9: [0,0,0,0,0],
    10: [0,0,0,0,0],
    11: [0,0,0,0,0],
    12: [0,0,0,0,0]
  }
  data.forEach(entry => {
    if (typeof(entry[0]) !== 'string') {
      let month = entry[1];
      let moodInd = entry[3]-1;
      months[month][moodInd]++;
    }
  })
  let filtered = [["Month", "😭 Days", "😥 Days", "😐 Days", "😊 Days", "😁 Days"]];
  for (let month in months) {
    filtered.push([month, months[month][0], months[month][1], months[month][2], months[month][3], months[month][4]])
  }
  console.log("Done filtering: ", filtered)
  return filtered;
}

const BarChart = ({ data }) => {
  console.log("PROCESS: ", data)
  const organizedData = filterMonths(data)
  return (
    <Chart
      width="100%"
      height={'300px'}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={organizedData}
      options={{
        chart: {
          title: 'Moods By Month',
          // legend: { position: "bottom" },
          // hAxis: {
          //   title: 'Month',
          // },
          // vAxis: {
          //   title: 'Mood',
          //   viewWindow: { min: 1, max: 5 }
          // }
        },
      }}
    />
  )
}

export default BarChart
