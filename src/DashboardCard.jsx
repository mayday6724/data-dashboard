import React from 'react';

function DashboardCard({ title, value, comparison, date }) {
  return (
    <div className="flex flex-col px-6 py-4 w-full text-base text-black bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.15)] max-md:px-5 max-md:mt-5">
      <h3 className="self-start">{title}</h3>
      <p className="self-start mt-4 text-3xl font-semibold">{value}</p>
      <hr className="shrink-0 mt-2.5 h-0.5 border border-solid border-neutral-300" />
      {comparison ? (
        <p className="mt-3 leading-7 text-left">
          與上月相比 <span className="font-bold text-green-600">{comparison}</span>
        </p>
      ) : (
        <p className="mt-3 leading-7 max-md:mr-2">{date}</p>
      )}
    </div>
  );
}

export default DashboardCard;