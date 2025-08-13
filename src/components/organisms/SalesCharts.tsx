import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { SalesRecord } from "@/types/index";

// const getProductSalesData = (data: SalesRecord[]) => {
//   if (!data || data.length === 0) return [];
//   const productSalesMap = data.reduce((acc, current) => {
//     acc[current.product] = (acc[current.product] || 0) + current.sales;
//     return acc;
//   }, {} as { [key: string]: number });

//   return Object.keys(productSalesMap).map((product) => ({
//     name: product,
//     value: productSalesMap[product],
//   }));
// };

const YEAR_COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

const getYearlySalesData = (data: SalesRecord[]) =>
  [2022, 2023, 2024].map((yr, index) => ({
    name: yr.toString(),
    value: data
      .filter((item) => item.year === yr)
      .reduce((sum, item) => sum + item.sales, 0),
    color: YEAR_COLORS[index % YEAR_COLORS.length],
  }));

export default function SalesChart({
  data,
  threshold = 0,
}: {
  data: SalesRecord[];
  threshold?: number;
}) {
  const [chartType, setChartType] = useState<"line" | "bar" | "pie">("line");
  const [year, setYear] = useState(2024);

  // Filter Data
  const filteredData = data.filter(
    (item) => item.year === year && item.sales > threshold
  );

  const totalDataCount = data.filter((item) => item.year === year).length;
  const visibleDataCount = filteredData.length;
  // const productData = getProductSalesData(filteredData);

  const chartHeight = chartType === "pie" ? 280 : 260;

  const renderChart = () => {
    if (filteredData.length === 0) {
      return (
        <div className="flex items-center justify-center h-[300px] text-gray-500">
          No data available for this chart.
        </div>
      );
    }

    const commonProps = {
      margin: { top: 20, right: 20, left: 0, bottom: 5 },
    };

    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart data={filteredData} {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#374151" />
              <YAxis stroke="#374151" />
              <Tooltip contentStyle={{ borderRadius: "8px" }} />
              <Legend />
              <Bar
                dataKey="sales"
                fill="#4F46E5"
                name="Sales (Units)"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        );

      case "pie":
        const yearlyData = getYearlySalesData(data); // use all data, not filtered by selected year
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <PieChart>
              <Pie
                data={yearlyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="75%"
                label={({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
                }
              >
                {yearlyData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8 }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return (
          <ResponsiveContainer width="100%" height={chartHeight}>
            <LineChart data={filteredData} {...commonProps}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#374151" />
              <YAxis yAxisId="sales" stroke="#374151" />
              <YAxis yAxisId="revenue" orientation="right" stroke="#10B981" />
              <Tooltip contentStyle={{ borderRadius: "8px" }} />
              <Legend />
              <Line
                yAxisId="sales"
                type="monotone"
                dataKey="sales"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="w-full mx-auto my-4 bg-white rounded-xl p-4 shadow-md">
      {/* Year Selector */}
      <div className="flex flex-wrap justify-center mb-4 space-x-2">
        {[2022, 2023, 2024].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`py-1.5 px-4 rounded-md font-medium transition ${
              year === y
                ? "bg-green-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Chart Type Selector */}
      <div className="flex flex-wrap justify-center space-x-2 mb-4">
        {["line", "bar", "pie"].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type as "line" | "bar" | "pie")}
            className={`py-1.5 px-4 rounded-md font-medium transition ${
              chartType === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Data Info */}
      <div
        className={`mb-4 text-center font-medium ${
          visibleDataCount === 0 ? "text-red-500" : "text-gray-700"
        }`}
      >
        Showing {visibleDataCount} of {totalDataCount} months for {year}
        {threshold > 0 && ` (${threshold}+ sales only)`}
      </div>

      {renderChart()}
    </div>
  );
}
