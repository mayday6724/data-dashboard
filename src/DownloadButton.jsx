import React from 'react';
import * as XLSX from 'xlsx';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Convert JSON data to XLSX and add to a ZIP file
async function convertAndDownload(files) {
  const zip = new JSZip();

  files.forEach((file) => {
    // Ensure data is in array format
    const data = Array.isArray(file.data) ? file.data : Object.values(file.data);

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    const xlsxData = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    zip.file(file.name.replace('.json', '.xlsx'), xlsxData);
  });

  // Generate ZIP file and trigger download
  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'files.zip');
}

function DownloadButton({ text, files }) {
  return (
    <button
      onClick={() => convertAndDownload(files)}
      className="px-8 py-6 bg-green-300 rounded-3xl shadow-[0px_4px_10px_rgba(0,0,0,0.25)] max-md:px-5"
    >
      {text}
    </button>
  );
}

export default DownloadButton;

