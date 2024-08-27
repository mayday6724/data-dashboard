import data from "../2024mock_data_sheet3_0827.json";

function calculateTotalDistance(data, date) {
  return data
    .filter((item) => item["統計日期"] === date)
    .reduce((total, item) => total + parseFloat(item["總行走距離"]), 0);
}

// 計算變化百分比的函數
function calculatePercentageChange(current, previous) {
  if (previous === 0) return Infinity;

  const change = ((current - previous) / previous) * 100;
  const formattedChange = parseFloat(change.toFixed(1));

  return formattedChange >= 0 ? `+${formattedChange}` : `${formattedChange}`;
}

// 計算當前月份和前一個月份的日期
function getMonthDates(referenceDate) {
  const date = new Date(referenceDate);
  const currentMonth = `${date.getFullYear()}/${date
    .getMonth()
    .toString()
    .padStart(2, "0")}/30`;

  date.setMonth(date.getMonth() - 2); // 設定為前一個月
  const previousMonth = `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/30`;

  return { currentMonth, previousMonth };
}

const today = new Date();
const { currentMonth, previousMonth } = getMonthDates(today);

// count distance and percentage
export const distanceValue = calculateTotalDistance(data, currentMonth);
const previousMonthTotal = calculateTotalDistance(data, previousMonth);
export const distanceComparison =
  calculatePercentageChange(distanceValue, previousMonthTotal) + "%";
export default calculatePercentageChange;
