// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0819.json";
// import { PieChart, Pie, Tooltip, Legend } from "recharts";
import { PieChart } from "@mui/x-charts/PieChart";

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

// Calculate total number of people
// const totalCount = maleCount + femaleCount;

// Calculate the percentage for each gender
export const genderData = [
  {
    name: "Male",
    value: maleCount,
  },
  {
    name: "Female",
    value: femaleCount,
  },
];

// draw the pie chart
function GenderPieChart(data) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "series A" },
            { id: 1, value: 15, label: "series B" },
            { id: 2, value: 20, label: "series C" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    // <PieChart width={730} height={250}>
    //   <Pie
    //     data={data}
    //     dataKey="value"
    //     nameKey="name"
    //     cx="50%"
    //     cy="50%"
    //     outerRadius={50}
    //     fill="#8884d8"
    //     label
    //   />
    //   <Tooltip></Tooltip>
    //   <Legend></Legend>
    // </PieChart>
  );
}

export default GenderPieChart;
