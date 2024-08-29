import "./App.css";
import DashboardCard from "./DashboardCard";
import ChartCard from "./ChartCard";
import DownloadButton from "./DownloadButton";
import AgeRangeBarChart, { ageData } from "./charts/AgeRangeBarChart";
import GenderPieChart, { totalCount } from "./charts/GenderPieChart";
import TrendLineChart, { participantsFiles } from "./charts/TrendLineChart";
import BmiBarChart, { bmiData } from "./charts/BmiBarChart";
import CompleteTimesBarChart, {
  completeTimes,
} from "./charts/CompleteTimesBarChart";
import CompleteNumBarChart, { completeNum } from "./charts/CompleteNumBarChart";
import LocationTreeMap from "./charts/LocationTreeMap";
import CodePieChart from "./charts/CodePieChart";
import ReturnNumLineChart, {
  memberStatistics,
} from "./charts/ReturnNumLineChart";
import {
  registrationsValue,
  registrationComparison,
} from "./charts/RegistrationCount";
import UpdatedTime from "./charts/UpdatedTime";
import { distanceValue, distanceComparison } from "./charts/DistanceCount";
import DistanceLineChart, {
  distanceData,
  distanceFiles,
} from "./charts/DistanceLineChart";
import MinutesLineChart, { minutesData } from "./charts/ＭinutesLineChart";

function App() {
  return (
    <main className="flex overflow-hidden flex-col items-start px-14 pt-11 pb-56 bg-white max-md:px-5 max-md:pb-24">
      <h1 className="text-xl text-black font-bold">
        數位健走儀表板 Digital Walk Dashboard
      </h1>
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-5">
              <DashboardCard
                title="本月新增報名人數"
                value={new Intl.NumberFormat("en-US").format(
                  registrationsValue
                )}
                comparison={registrationComparison}
              />
              <h2 className="self-start mt-24 text-xl max-md:mt-10">
                參與者輪廓分析
              </h2>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <DashboardCard
              title="累積報名人數"
              value={new Intl.NumberFormat("en-US").format(totalCount)}
              date={UpdatedTime()}
            />
          </div>
          <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <DashboardCard
              title="本月累積總里程（km）"
              value={new Intl.NumberFormat("en-US").format(distanceValue)}
              comparison={distanceComparison}
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
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-">
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
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-">
            <ChartCard
              title="遊戲種類完成度－平均次數"
              data={completeTimes}
              ChartComponent={CompleteTimesBarChart}
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ChartCard
              title="遊戲種類完成度－人數"
              data={completeNum}
              ChartComponent={CompleteNumBarChart}
            />
          </div>
        </div>
      </section>
      <section className="self-stretch mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard title="邀請碼使用率" ChartComponent={CodePieChart} />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard
              title="每月健走里程變化（km）"
              data={distanceData}
              ChartComponent={DistanceLineChart}
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <ChartCard
              title="每月健走時間變化（min）"
              data={minutesData}
              ChartComponent={MinutesLineChart}
            />
          </div>
        </div>
      </section>
      <h2 className="mt-16 text-xl text-black max-md:mt-10">匯出歷年數據</h2>
      <div className="flex flex-wrap gap-10 mt-7 text-xl text-black whitespace-nowrap">
        <DownloadButton
          text="下載參與者資料表"
          files={participantsFiles}
          fileName={"參與者資料表"}
        />
        <DownloadButton text="下載健走軌跡資料表" />
        <DownloadButton
          text="下載月度健走統計表"
          files={distanceFiles}
          fileName={"月度健走統計表"}
        />
      </div>
    </main>
  );
}

export default App;
