"use client";
import { useState } from "react";
import { salesData } from "@/data/salesData";
import Heading from "@/components/atoms/Heading";
import FilterInput from "@/components/molecules/FilterInput";
import SalesChart from "@/components/organisms/SalesCharts";

export default function Dashboard() {
  const [threshold, setThreshold] = useState(0);
  const filteredData = salesData.filter((s) => s.sales > threshold);

  const handleFilterChange = (val: number) => {
    setThreshold(val);
  };

  // const handleFilterReset = () => {
  //   setThreshold(0);
  // };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Heading />
      <FilterInput threshold={threshold} onChange={handleFilterChange} />
      <SalesChart data={filteredData} />
    </main>
  );
}