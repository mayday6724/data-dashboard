// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../2024mock_data.json";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

// Initialize counters for each gender
let maleCount = 0;
let femaleCount = 0;

// Count the number of males and females
data.forEach((person) => {
  if (person.性別 === "male") {
    maleCount += 1;
  } else if (person.性別 === "female") {
    femaleCount += 1;
  }
});

// export the counts for each gender
const genderData = [
  {
    label: "男性",
    value: maleCount,
    color: "#0088FE",
  },
  {
    label: "女性",
    value: femaleCount,
    color: "#FFBB28",
  },
];

// Calculate total number of people and percentage
export const totalCount = maleCount + femaleCount;
const getArcLabel = (params) => {
  const percent = params.value / totalCount;
  return `${(percent * 100).toFixed(0)}%`;
};

// draw the pie chart
function GenderPieChart() {
  return (
    <div>
      {/* <p>截至今日總參與人數：{totalCount}</p> */}
      <PieChart
        series={[
          {
            outerRadius: 80,
            data: genderData,
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

export default GenderPieChart;
