"use client";

import { useState } from "react";
import { salesData } from "@/data/salesData";
import Heading from "@/components/atoms/Heading";
import FilterInput from "@/components/molecules/FilterInput";
import SalesChart from "@/components/organisms/SalesCharts";
import KPISection from "@/components/organisms/KPISection";

export default function Dashboard() {
  const [threshold, setThreshold] = useState(0);
  const filteredData = salesData.filter((s) => s.sales > threshold);

  return (
    <main className="min-h-screen bg-gray-100 p-0">
      <Heading />
      <FilterInput threshold={threshold} onChange={setThreshold} />
      <KPISection data={filteredData}/>
      <SalesChart data={filteredData} />
    </main>
  );
}
