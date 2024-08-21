// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/dataService.js';
import data from "../mock_data_0821.json";
import { Treemap } from "recharts";

// const COLORS = ["#8889DD", "#8DC77B", "#A5D297"];

// calculation
const cityCounts = {};

data.forEach((item) => {
  const city = item["居住縣市"];
  if (cityCounts[city]) {
    cityCounts[city] += 1;
  } else {
    cityCounts[city] = 1;
  }
});

export const locationCounts = Object.keys(cityCounts).map((key) => ({
  name: key,
  size: cityCounts[key],
}));

function LocationTreemap() {
  return (
    <div>
      <h3>主要地區客群</h3>
      <Treemap
        width={400}
        height={200}
        data={locationCounts}
        dataKey="size"
        stroke="#fff"
        fill="#4e79a7"
      />
    </div>
  );
}

export default LocationTreemap;
