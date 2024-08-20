// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0819.json";
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { BarChart } from "@mui/x-charts/BarChart";

// Define age ranges
const ageRanges = [
  { range: "0-20歲", min: 0, max: 20 },
  { range: "21-30歲", min: 21, max: 30 },
  { range: "31-40歲", min: 31, max: 40 },
  { range: "41-50歲", min: 41, max: 50 },
  { range: "51-60歲", min: 51, max: 60 },
  { range: "61-70歲", min: 61, max: 70 },
  { range: "71-80歲", min: 71, max: 80 },
  { range: "81歲以上", min: 81, max: Infinity },
];

// Initialize counts for each age range
const counts = ageRanges.map((range) => ({
  range: range.range,
  count: 0,
}));

// Count the number of people in each age range
data.forEach((person) => {
  const age = parseInt(person.年齡, 10);
  const range = ageRanges.find((range) => age >= range.min && age <= range.max);
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
  percentage: ((rangeData.count / totalPeople) * 100).toFixed(2),
}));

// formatting value
const valueFormatter = (value) => `${value}%`;

function AgeRangeBarChart({ data }) {
  return (
    <BarChart
      dataset={data}
      yAxis={[{ scaleType: "band", dataKey: "range" }]}
      series={[{ dataKey: "percentage", label: "總人數佔比", valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      width={500}
      height={300}
    />
    // <BarChart width={500} height={350} data={data}>
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="range" label={{ value: "年齡區間" }} height={80} />
    //   <YAxis />
    //   <Tooltip />
    //   <Bar dataKey="percentage" fill="#8884d8" name={"總人數佔比"} />
    // </BarChart>
  );
}

export const ageData = percentages;
export default AgeRangeBarChart;
