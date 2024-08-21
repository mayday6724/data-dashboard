import "./App.css";
import AgeRangeBarChart, { ageData } from "./charts/AgeRangeBarChart";
import GenderPieChart from "./charts/GenderPieChart";

function App() {
  return (
    <div className="App">
      <h2>參與者輪廓分析</h2>
      <h3 className="chartTitle">活動參與者主要年齡客群</h3>
      <AgeRangeBarChart data={ageData} />
      <h3 className="chartTitle">截至今日總參與人數</h3>
      <GenderPieChart />
    </div>
  );
}

export default App;
