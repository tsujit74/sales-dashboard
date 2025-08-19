import React from 'react';

interface Props {
  threshold: number;
  onChange: (val: number) => void;
}

export default function FilterInput({ threshold, onChange }: Props) {
  return (
    <div className="flex justify-center px-4 sm:px-6">
      <input
        type="number"
        value={threshold === 0 ? "" : threshold}
        onChange={(e) => {
          const value = e.target.value;
          onChange(value === "" ? 0 : Number(value));
        }}
        placeholder="Filter sales >"
        className="w-full md:w-72 pl-3 pr-3 py-2 rounded-lg border border-slate-700 text-gray-500 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-md mb-4"
      />
    </div>
  );
}
