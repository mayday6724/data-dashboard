// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0819.json";
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
    label: "Male",
    value: maleCount,
    color: "#0088FE",
  },
  {
    label: "Female",
    value: femaleCount,
    color: "#FFBB28",
  },
];

// Calculate total number of people and percentage
const totalCount = maleCount + femaleCount;
const getArcLabel = (params) => {
  const percent = params.value / totalCount;
  return `${(percent * 100).toFixed(0)}%`;
};

// draw the pie chart
function GenderPieChart() {
  return (
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
      width={400}
      height={200}
    />
  );
}

export default GenderPieChart;
