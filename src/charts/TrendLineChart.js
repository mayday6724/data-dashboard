import data2023 from "../mock_data_0821.json";
import data2022 from "../2022mock_data_0822.json";
import data2021 from "../2021mock_data_0822.json";
import data2024 from "../2024mock_data.json";
import { LineChart } from "@mui/x-charts/LineChart";

// calculation
const calculateMonthData = (data) => {
  const monthCounts = {};
  for (let i = 1; i <= 12; i++) {
    monthCounts[i] = 0;
  }

  data.forEach((entry) => {
    const date = new Date(entry["報名日期"]);
    const month = date.getMonth() + 1;
    monthCounts[month]++;
  });

  return [
    monthCounts[1],
    monthCounts[2],
    monthCounts[3],
    monthCounts[4],
    monthCounts[5],
    monthCounts[6],
    monthCounts[7],
    monthCounts[8],
    monthCounts[9],
    monthCounts[10],
    monthCounts[11],
    monthCounts[12],
  ];
};

// Calculate month data for each year
const monthData2024 = calculateMonthData(data2024);
const monthData2023 = calculateMonthData(data2023);
const monthData2022 = calculateMonthData(data2022);
const monthData2021 = calculateMonthData(data2021);

// draw the chart
const numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
function TrendLineChart() {
  return (
    <div>
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: numbers,
            valueFormatter: (v) => `${v}月`,
          },
        ]}
        series={[
          { data: monthData2021, label: "2021年" },
          { data: monthData2022, label: "2022年" },
          { data: monthData2023, label: "2023年" },
          { data: monthData2024, label: "2024年" },
        ]}
        width={450}
        height={250}
      />
    </div>
  );
}

export default TrendLineChart;
