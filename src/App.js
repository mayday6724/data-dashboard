import "./App.css";
import AgeRangeBarChart, { ageData } from "./charts/AgeRangeBarChart";
import GenderPieChart from "./charts/GenderPieChart";
import TrendLineChart, { monthData } from "./charts/TrendLineChart";

function App() {
  return (
    <div className="App">
      <h2>參與者輪廓分析</h2>
      <div className="chart-container">
        <AgeRangeBarChart data={ageData} className="chart" />
        <GenderPieChart className="chart" />
        <TrendLineChart className="chart" />
      </div>
    </div>
  );
}
console.log(monthData);
export default App;
