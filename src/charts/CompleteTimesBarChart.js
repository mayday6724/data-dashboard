// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0821.json";
import { BarChart } from "@mui/x-charts/BarChart";

const accumulations = data.reduce(
  (acc, item) => {
    acc["問答挑戰賽(次數)"] += parseInt(item["問答挑戰賽(次數)"]);
    acc["健走打卡趣(次數)"] += parseInt(item["健走打卡趣(次數)"]);
    acc["輕鬆趴趴走(400m/1次)"] += parseInt(item["輕鬆趴趴走(400m/1次)"]);
    acc["臺北尋寶趣(寶石數)"] += parseInt(item["臺北尋寶趣(寶石數)"]);
    return acc;
  },
  {
    "問答挑戰賽(次數)": 0,
    "健走打卡趣(次數)": 0,
    "輕鬆趴趴走(400m/1次)": 0,
    "臺北尋寶趣(寶石數)": 0,
  }
);

// count total people
const totalPeople = data.length;

export const completeTimes = Object.keys(accumulations).map((key) => ({
  name: key,
  value: Math.round((accumulations[key] / totalPeople) * 100),
}));

// draw bar chart
const valueFormatter = (value) => `${value}/人`;
function CompleteTimesBarChart({ data }) {
  return (
    <div>
      <h3>遊戲種類完成度－平均次數</h3>
      <BarChart
        dataset={data}
        xAxis={[{ scaleType: "band", dataKey: "name" }]}
        series={[{ dataKey: "value", label: "平均次數", valueFormatter }]}
        grid={{ horizontal: true }}
        width={650}
        height={300}
      />
    </div>
  );
}

export default CompleteTimesBarChart;
