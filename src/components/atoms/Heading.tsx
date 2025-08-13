"use client";
import React, { useEffect, useState } from "react";

export default function Heading() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString());
  }, []);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8 px-4 py-2">
      <div>
        <h1 className="text-3xl text-gray-900 font-bold">Sales Dashboard</h1>
        <p className="text-sm text-slate-400">Sales Analytics for 2022-2024</p>
      </div>
      <span className="text-sm text-slate-400 mt-2 sm:mt-0">
        Last Updated: {date}
      </span>
    </header>
  );
}
