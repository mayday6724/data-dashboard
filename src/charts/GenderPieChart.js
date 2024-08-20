// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0819.json";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

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
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
        label
      />
      <Tooltip></Tooltip>
      <Legend></Legend>
    </PieChart>
  );
}

export default GenderPieChart;
