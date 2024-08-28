// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data2024 from "../2024mock_data_sheet3_0827.json";
import { LineChart } from "@mui/x-charts/LineChart";

const monthlyData = {};

data2024.forEach((entry) => {
  const month = entry["統計日期"].slice(5, 7); // 取得月份部分 (yyyy/mm)
  const totalMinutes = parseFloat(entry["總行走分鐘數"]);
  const days = parseInt(entry["軌跡上傳天數"]);
  const dailyMinutes = totalMinutes / days;

  if (!monthlyData[month]) {
    monthlyData[month] = {
      totalMinutesSum: 0,
      dailyMinutesSum: 0,
      count: 0,
    };
  }

  // 累加每個月份的總行走分鐘數和每日行走分鐘數
  monthlyData[month].totalMinutesSum += totalMinutes;
  monthlyData[month].dailyMinutesSum += dailyMinutes;
  monthlyData[month].count += 1;
});

export const minutesData = Object.keys(monthlyData).map((month) => {
  const averageMonthlyMinutes =
    monthlyData[month].totalMinutesSum / monthlyData[month].count;
  const averageDailyMinutes =
    monthlyData[month].dailyMinutesSum / monthlyData[month].count;

  return {
    month: month,
    totalMinutes: parseFloat(averageMonthlyMinutes.toFixed(1)),
    dailyMinutes: parseFloat(averageDailyMinutes.toFixed(1)),
  };
});

// draw the chart
function MinutesLineChart({ data }) {
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
          { dataKey: "totalMinutes", label: "平均總分鐘數" },
          { dataKey: "dailyMinutes", label: "平均每日分鐘數" },
        ]}
      />
    </div>
  );
}
export default MinutesLineChart;
