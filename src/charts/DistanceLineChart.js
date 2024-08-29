// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data2024 from "../2024mock_data_sheet3_0827.json";
import { LineChart } from "@mui/x-charts/LineChart";

const monthlyData = {};

data2024.forEach((entry) => {
  const month = entry["統計日期"].slice(5, 7);
  const totalDistance = parseFloat(entry["總行走距離"]);
  const days = parseInt(entry["軌跡上傳天數"]);
  const dailyDistance = totalDistance / days;

  if (!monthlyData[month]) {
    monthlyData[month] = {
      totalDistance: 0,
      dailyDistanceSum: 0,
      count: 0,
    };
  }

  monthlyData[month].totalDistance += totalDistance;
  monthlyData[month].dailyDistanceSum += dailyDistance;
  monthlyData[month].count += 1;
});

// 計算每個月份的「平均每人」數據
export const distanceData = Object.keys(monthlyData).map((month) => {
  const totalDistance =
    monthlyData[month].totalDistance / monthlyData[month].count;
  const dailyDistance =
    monthlyData[month].dailyDistanceSum / monthlyData[month].count;

  return {
    month: month,
    totalDistance: parseFloat(totalDistance.toFixed(1)),
    dailyDistance: parseFloat(dailyDistance.toFixed(1)),
  };
});

// draw the chart
function DistanceLineChart({ data }) {
  return (
    <div>
      <LineChart
        width={350}
        height={250}
        dataset={data}
        xAxis={[
          {
            scaleType: "point",
            dataKey: "month",
            valueFormatter: (v) => `${v}月`,
          },
        ]}
        series={[
          { dataKey: "totalDistance", label: "平均總里程" },
          { dataKey: "dailyDistance", label: "平均每日里程" },
        ]}
      />
    </div>
  );
}
export default DistanceLineChart;

// pack data files and export
export const distanceFiles = [
  { name: "2024_表三_月度健走統計表.json", data: data2024 },
];
