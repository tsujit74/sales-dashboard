// components/sections/KPISection.tsx
import React from "react";
import KPI from "../molecules/Kpi";
import { FaShoppingCart, FaChartLine, FaTrophy, FaCalendarAlt } from "react-icons/fa";

interface Sale {
  product: string;
  sales: number;
  month: string;
  year: number;
}

interface KPISectionProps {
  data: Sale[];
}

export default function KPISection({ data }: KPISectionProps) {
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = (totalSales / data.length).toFixed(2);

  const bestProduct = data.reduce((best, item) =>
    item.sales > best.sales ? item : best
  );

  const monthSalesMap: Record<string, number> = {};
  data.forEach((item) => {
    monthSalesMap[item.month] = (monthSalesMap[item.month] || 0) + item.sales;
  });
  const highestMonth = Object.entries(monthSalesMap).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
      <KPI title="Total Sales" value={totalSales} color="bg-white-500" Icon={FaShoppingCart} />
      <KPI title="Average Sales" value={avgSales} color="bg-white-500" Icon={FaChartLine} />
      <KPI title="Best Product" value={bestProduct.product} color="bg-white-500" Icon={FaTrophy} />
      <KPI
        title="Top Month"
        value={highestMonth[0]}
        subtitle={`Sales: ${highestMonth[1]}`}
        color="bg-white-500"
        Icon={FaCalendarAlt}
      />
    </div>
  );
}
