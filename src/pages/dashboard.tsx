'use client';
import { useState } from 'react';
import { salesData } from '@/data/salesData';
import Heading from '@/components/atoms/Heading';
import FilterInput from '@/components/molecules/FilterInput';
import SalesChart from '@/components/organisms/SalesChart';

export default function Dashboard() {
  const [threshold, setThreshold] = useState(0);
  const filteredData = salesData.filter(s => s.sales > threshold);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Heading text="Sales Dashboard" />
      <FilterInput threshold={threshold} onChange={setThreshold} />
      <SalesChart data={filteredData} />
    </div>
  );
}
