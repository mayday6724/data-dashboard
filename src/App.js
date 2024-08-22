import "./App.css";
import AgeRangeBarChart, { ageData } from "./charts/AgeRangeBarChart";
import GenderPieChart from "./charts/GenderPieChart";
import TrendLineChart from "./charts/TrendLineChart";
import BmiBarChart, { bmiData } from "./charts/BmiBarChart";
import CompleteTimesBarChart, {
  completeTimes,
} from "./charts/CompleteTimesBarChart";
import CompleteNumBarChart, { completeNum } from "./charts/CompleteNumBarChart";
import LocationTreeMap from "./charts/LocationTreeMap";
import CodePieChart from "./charts/CodePieChart";

function App() {
  return (
    <div className="App">
      <h2>參與者輪廓分析</h2>
      <div className="chart-container">
        <AgeRangeBarChart data={ageData} className="chart" />
        <GenderPieChart className="chart" />
        <TrendLineChart className="chart" />
        <BmiBarChart data={bmiData} className="chart" />

        <LocationTreeMap />
      </div>
      <h2>黏著度分析</h2>
      <div className="chart-container">
        <CompleteTimesBarChart data={completeTimes} className="chart" />
        <CompleteNumBarChart data={completeNum} className="chart" />
        <CodePieChart className="chart" />
      </div>
    </div>
  );
}

export default App;
