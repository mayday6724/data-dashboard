import data2023 from "../mock_data_0821.json";
import data2022 from "../2022mock_data_0822.json";
import data2021 from "../2021mock_data_0822.json";
import { LineChart } from "@mui/x-charts/LineChart";

// Initialize a set to keep track of already registered members
const registeredMembers = new Set();

// Function to count new and returning members
function countMembers(year, yearData) {
  let newMembers = 0;
  let returningMembers = 0;

  yearData.forEach((member) => {
    if (registeredMembers.has(member["會員編號"])) {
      returningMembers++;
    } else {
      newMembers++;
      registeredMembers.add(member["會員編號"]);
    }
  });

  return { year, newMembers, returningMembers };
}

export const memberStatistics = [];
memberStatistics.push(countMembers(2021, data2021));
memberStatistics.push(countMembers(2022, data2022));
memberStatistics.push(countMembers(2023, data2023));

// draw the chart
function ReturnNumLineChart({ data }) {
  return (
    <div>
      <h3>新舊註冊會員人數歷年比較</h3>
      <LineChart
        dataset={data}
        width={450}
        height={300}
        series={[
          { dataKey: "newMembers", label: "新註冊會員" },
          { dataKey: "returningMembers", label: "舊註冊會員" },
        ]}
        xAxis={[
          {
            scaleType: "point",
            dataKey: "year",
            valueFormatter: (v) => `${v}年`,
          },
        ]}
      />
    </div>
  );
}

export default ReturnNumLineChart;
