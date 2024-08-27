// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../2024mock_data.json";
import calculatePercentageChange from "./DistanceCount";

const getMonthFromDate = (dateStr) => {
  return new Date(dateStr).getMonth() + 1; // JavaScript months are 0-11, so add 1
};

// Helper function to extract the year from the registration date
const getYearFromDate = (dateStr) => {
  return new Date(dateStr).getFullYear();
};

// Get current date details
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

// Calculate the previous two months for comparison
const monthToCompare1 = currentMonth - 1; // Last month (July in this case)
const monthToCompare2 = currentMonth - 2; // Month before last (June in this case)
const yearToCompare1 = monthToCompare1 <= 0 ? currentYear - 1 : currentYear;
const yearToCompare2 = monthToCompare2 <= 0 ? currentYear - 1 : currentYear;

let lastMonthRegistrations = 0;
let previousMonthRegistrations = 0;

// Calculate the number of registrations for the last and previous months
data.forEach((record) => {
  const registrationDate = record["報名日期"];
  const registrationMonth = getMonthFromDate(registrationDate);
  const registrationYear = getYearFromDate(registrationDate);

  if (
    registrationYear === yearToCompare1 &&
    registrationMonth ===
      (monthToCompare1 <= 0 ? 12 + monthToCompare1 : monthToCompare1)
  ) {
    lastMonthRegistrations++;
  } else if (
    registrationYear === yearToCompare2 &&
    registrationMonth ===
      (monthToCompare2 <= 0 ? 12 + monthToCompare2 : monthToCompare2)
  ) {
    previousMonthRegistrations++;
  }
});

export const registrationsValue = lastMonthRegistrations;
export const registrationComparison =
  calculatePercentageChange(
    lastMonthRegistrations,
    previousMonthRegistrations
  ) + "%";
