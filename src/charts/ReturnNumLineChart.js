import data2023 from "../mock_data_0821.json";
import data2022 from "../2022mock_data_0822.json";
import data2021 from "../2021mock_data_0822.json";
import { LineChart } from "@mui/x-charts/LineChart";

// Initialize a set to keep track of already registered members
const registeredMembers = new Set();

// Function to count new and returning members
function countMembers(yearData) {
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

  return { newMembers, returningMembers };
}

// Count members for each year
const result2021 = countMembers(data2021);
const result2022 = countMembers(data2022);
const result2023 = countMembers(data2023);

// draw the chart
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["2021", "2022", "2023"];

export default function SimpleLineChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: "pv" },
        { data: uData, label: "uv" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
