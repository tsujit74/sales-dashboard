"use client";
import { useState } from "react";
import { salesData } from "@/data/salesData";
import Heading from "@/components/atoms/Heading";
import FilterInput from "@/components/molecules/FilterInput";
import SalesChart from "@/components/organisms/SalesCharts";

export default function Dashboard() {
  const [threshold, setThreshold] = useState(0);
  const filteredData = salesData.filter((s) => s.sales > threshold);

  return (
    <>
      <Heading />
      <SalesChart data={salesData} />
    </>
  );
}
