// // import React, { useEffect, useState } from 'react';
// // import { fetchData } from '../services/dataService.js';

import React from "react";
import data from "../2024mock_data.json";
import { Treemap } from "recharts";

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

const total = Object.values(cityCounts).reduce((acc, count) => acc + count, 0);

const CustomizedContent = (props) => {
  const { x, y, width, height, name, size } = props;
  const percentage = ((size / total) * 100).toFixed(2);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{ fill: "#4e79a7", stroke: "#fff" }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
      >
        {name}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + 20}
        textAnchor="middle"
        fill="#fff"
      >
        {percentage}%
      </text>
    </g>
  );
};

function LocationTreeMap() {
  return (
    <div>
      <Treemap
        width={450}
        height={250}
        data={locationCounts}
        dataKey="size"
        content={<CustomizedContent />}
      />
    </div>
  );
}

export default LocationTreeMap;
