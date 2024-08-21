import data from "../mock_data_0821.json";
import { LineChart } from "@mui/x-charts/LineChart";

// calculation
const monthCounts = {};

for (let i = 1; i <= 12; i++) {
  monthCounts[i] = 0;
}

data.forEach((entry) => {
  const date = new Date(entry["報名日期"]);
  const month = date.getMonth() + 1;

  monthCounts[month]++;
});

export const monthData = Object.keys(monthCounts).map((month) => ({
  month: parseInt(month, 10),
  value: monthCounts[month],
}));

// draw the chart

function TrendLineChart() {
  return (
    <div>
      <h3>總報名人數趨勢變化</h3>
      <LineChart
        dataset={monthData}
        xAxis={[{ dataKey: "month", valueFormatter: (v) => `${v}月` }]}
        series={[{ dataKey: "value", label: "人數" }]}
        width={450}
        height={300}
      />
    </div>
  );
}

export default TrendLineChart;
