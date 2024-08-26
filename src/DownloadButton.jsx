import React from 'react';

function DownloadButton({ text }) {
  return (
    <button className="px-8 py-6 bg-green-300 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5">
      {text}
    </button>
  );
}

export default DownloadButton;