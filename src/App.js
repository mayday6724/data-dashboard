import "./App.css";
import DashboardCard from "./DashboardCard";
import ChartCard from "./ChartCard";
import DownloadButton from "./DownloadButton";
import AgeRangeBarChart, { ageData } from "./charts/AgeRangeBarChart";
import GenderPieChart from "./charts/GenderPieChart";
import TrendLineChart from "./charts/TrendLineChart";
import BmiBarChart, { bmiData } from "./charts/BmiBarChart";
// import CompleteTimesBarChart, {
//   completeTimes,
// } from "./charts/CompleteTimesBarChart";
// import CompleteNumBarChart, { completeNum } from "./charts/CompleteNumBarChart";
import LocationTreeMap from "./charts/LocationTreeMap";
// import CodePieChart from "./charts/CodePieChart";
import ReturnNumLineChart, {
  memberStatistics,
} from "./charts/ReturnNumLineChart";
// import {
//   registrationsValue,
//   registrationComparison,
// } from "./charts/RegistrationCount";

function App() {
  return (
    // <div className="App">
    //   <h2>本月新增報名人數：{registrationsValue}</h2>
    //   <h2>與上月相比：{registrationComparison}</h2>
    //   <h2>參與者輪廓分析</h2>
    //   <div className="chart-container">
    //     <AgeRangeBarChart data={ageData} className="chart" />
    //     <GenderPieChart className="chart" />
    //     <TrendLineChart className="chart" />
    //     <BmiBarChart data={bmiData} className="chart" />
    //     <ReturnNumLineChart data={memberStatistics} className="chart" />
    //     <LocationTreeMap />
    //   </div>
    //   <h2>黏著度分析</h2>
    //   <div className="chart-container">
    //     <CompleteTimesBarChart data={completeTimes} className="chart" />
    //     <CompleteNumBarChart data={completeNum} className="chart" />
    //     <CodePieChart className="chart" />
    //   </div>
    // </div>
    <main className="flex overflow-hidden flex-col items-start px-14 pt-11 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <h1 className="text-xl text-black">
        數位健走儀表板 Digital Walk Dashboard
      </h1>
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-5">
              <DashboardCard
                title="本月新增報名人數"
                value="200"
                comparison="+3%"
              />
              <h2 className="self-start mt-24 text-xl max-md:mt-10">
                參與者輪廓分析
              </h2>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <DashboardCard
              title="截至今日總報名人數"
              value="3,200"
              date="2024/08/30 updated"
            />
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <DashboardCard
              title="本月累積總里程（km）"
              value="2,000"
              comparison="+3%"
            />
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-8 pt-5 pb-1 w-full text-xl text-black whitespace-nowrap bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <h3 className="self-start">歷年報名人數趨勢</h3>
              <TrendLineChart />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard
              title="主要年齡客群"
              data={ageData}
              ChartComponent={AgeRangeBarChart}
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard
              title="主要體位客群"
              data={bmiData}
              ChartComponent={BmiBarChart}
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard title="性別比" ChartComponent={GenderPieChart} />
          </div>
        </div>
      </section>
      <section className="mt-7 max-w-full w-[768px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ChartCard title="主要地區客群" ChartComponent={LocationTreeMap} />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ChartCard
              title="新舊註冊會員人數歷年比較"
              data={memberStatistics}
              ChartComponent={ReturnNumLineChart}
            />
          </div>
        </div>
      </section>
      <h2 className="mt-16 text-xl text-black max-md:mt-10">活動成效分析</h2>
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 pt-5 pb-72 w-full text-xl text-black whitespace-nowrap bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-md:px-5 max-md:pb-24 max-md:mt-7 max-md:max-w-full">
              遊戲種類完成度－平均次數
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 pt-5 pb-72 w-full text-xl text-black whitespace-nowrap bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-md:px-5 max-md:pb-24 max-md:mt-7 max-md:max-w-full">
              遊戲種類完成度－平均次數
            </div>
          </div>
        </div>
      </section>
      <div className="px-6 pt-4 pb-44 mt-7 max-w-full text-xl text-black whitespace-nowrap bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] w-[371px] max-md:px-5 max-md:pb-28">
        邀請碼使用率
      </div>
      <h2 className="mt-16 text-xl text-black max-md:mt-10">匯出歷年數據</h2>
      <div className="flex flex-wrap gap-10 mt-7 text-xl text-black whitespace-nowrap">
        <DownloadButton text="下載參與者資料表" />
        <DownloadButton text="下載健走軌跡資料表" />
        <DownloadButton text="下載月度健走統計表" />
      </div>
    </main>
  );
}

export default App;
