// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0821.json";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

// Initialize counters for each group
let useCount = 0;
let nonuseCount = 0;

// Count the number of use and nonuse
data.forEach((person) => {
  if (person.透過邀請碼報名 === "TRUE") {
    useCount += 1;
  } else if (person.透過邀請碼報名 === "FALSE") {
    nonuseCount += 1;
  }
});

// export the counts for each group
const codeData = [
  {
    label: "Yes",
    value: useCount,
    color: "#0088FE",
  },
  {
    label: "No",
    value: nonuseCount,
    color: "#FFBB28",
  },
];

// Calculate total number of people and percentage
const totalCount = useCount + nonuseCount;
const getArcLabel = (params) => {
  const percent = params.value / totalCount;
  return `${(percent * 100).toFixed(0)}%`;
};

// draw the pie chart
function CodePieChart() {
  return (
    <div>
      <PieChart
        series={[
          {
            outerRadius: 80,
            data: codeData,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
          },
        }}
        width={350}
        height={250}
      />
    </div>
  );
}

export default CodePieChart;
