// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0821.json";
import { BarChart } from "@mui/x-charts/BarChart";

// Define BMI ranges
const bmiRanges = [
  { range: "過輕", min: -Infinity, max: 18.5 },
  { range: "健康體重", min: 18.5, max: 24 },
  { range: "過重", min: 24, max: 27 },
  { range: "肥胖", min: 27, max: Infinity },
];

// Initialize counts for each bmi range
const counts = bmiRanges.map((range) => ({
  range: range.range,
  count: 0,
}));

// Count the number of people in each bmi range
data.forEach((person) => {
  const bmi = parseFloat(person.BMI).toFixed(2);
  const range = bmiRanges.find((range) => bmi >= range.min && bmi < range.max);
  if (range) {
    const rangeData = counts.find((r) => r.range === range.range);
    if (rangeData) {
      rangeData.count += 1;
    }
  }
});

// count total people
const totalPeople = data.length;

// count percentage in each range
const percentages = counts.map((rangeData) => ({
  range: rangeData.range,
  percentage: Math.round((rangeData.count / totalPeople) * 100),
}));

const valueFormatter = (value) => `${value}%`;

function BmiBarChart({ data }) {
  return (
    <div>
      <h3>主要體位客群</h3>
      <BarChart
        dataset={data}
        yAxis={[{ scaleType: "band", dataKey: "range" }]}
        series={[
          { dataKey: "percentage", label: "總人數佔比", valueFormatter },
        ]}
        layout="horizontal"
        grid={{ vertical: true }}
        width={450}
        height={300}
      />
    </div>
  );
}

export const bmiData = percentages;
export default BmiBarChart;
