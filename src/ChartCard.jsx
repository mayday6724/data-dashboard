import React from 'react';

function ChartCard({ title, data, ChartComponent }) {
  return (
    <div className="flex flex-col px-6 pt-4 pb-2 w-full text-xl text-black whitespace-nowrap bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-md:px-5 max-md:mt-7">
      <h3 className="self-start">{title}</h3>
      <div className="mt-2 w-full">
        {ChartComponent && <ChartComponent data={data} />}
      </div>
    </div>
  );
}

export default ChartCard;