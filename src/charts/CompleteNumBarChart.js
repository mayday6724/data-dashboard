// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0821.json";
import { BarChart } from "@mui/x-charts/BarChart";

const participationCounts = {
  問答挑戰賽: 0,
  健走打卡趣: 0,
  輕鬆趴趴走: 0,
  臺北尋寶趣: 0,
};

data.forEach((item) => {
  if (parseInt(item["問答挑戰賽(次數)"]) > 0) {
    participationCounts["問答挑戰賽"] += 1;
  }
  if (parseInt(item["健走打卡趣(次數)"]) > 0) {
    participationCounts["健走打卡趣"] += 1;
  }
  if (parseInt(item["輕鬆趴趴走(400m/1次)"]) > 0) {
    participationCounts["輕鬆趴趴走"] += 1;
  }
  if (parseInt(item["臺北尋寶趣(寶石數)"]) > 0) {
    participationCounts["臺北尋寶趣"] += 1;
  }
});

export const completeNum = Object.keys(participationCounts).map((key) => ({
  name: key,
  value: participationCounts[key],
}));

// draw bar chart
const valueFormatter = (value) => `${value}人`;
function CompleteNumBarChart({ data }) {
  return (
    <div>
      <h3>遊戲種類完成度－人數</h3>
      <BarChart
        dataset={data}
        xAxis={[{ scaleType: "band", dataKey: "name" }]}
        series={[{ dataKey: "value", label: "參與人數", valueFormatter }]}
        grid={{ horizontal: true }}
        width={650}
        height={300}
      />
    </div>
  );
}

export default CompleteNumBarChart;
