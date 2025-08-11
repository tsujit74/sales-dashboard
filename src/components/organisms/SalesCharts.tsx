import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

interface SalesRecord {
  month: string;
  year: number;
  sales: number;
  revenue: number;
  product: string;
}

interface SalesChartProps {
  data: SalesRecord[];
}

const getProductSalesData = (data: SalesRecord[]) => {
  if (!data || data.length === 0) {
    return [];
  }
 
  const productSalesMap = data.reduce((acc, current) => {
    acc[current.product] = (acc[current.product] || 0) + current.sales;
    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(productSalesMap).map(product => ({
    name: product,
    value: productSalesMap[product]
  }));
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SalesChart = ({ data }: SalesChartProps) => {
  const [chartType, setChartType] = useState('line');

  const productData = getProductSalesData(data);

  const renderChart = () => {
    if (!data || data.length === 0) {
      return (
        <div className="flex items-center justify-center h-[300px] text-gray-500">
          No data available for this chart.
        </div>
      );
    }
    
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                labelStyle={{ color: '#333' }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Sales (Units)" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                labelStyle={{ color: '#333' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'line':
      default:
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="month" stroke="#333" />
              <YAxis yAxisId="sales" stroke="#333" tickFormatter={(value) => `${value.toLocaleString()}`} />
              <YAxis yAxisId="revenue" orientation="right" stroke="#82ca9d" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
              <Tooltip
                formatter={(value, name) => [value.toLocaleString(), name]}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                labelStyle={{ color: '#333' }}
              />
              <Legend />
              <Line yAxisId="sales" type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" activeDot={{ r: 8 }} />
              <Line yAxisId="revenue" type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="w-full md:w-3/4 max-w-4xl mx-auto my-8 bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-center space-x-4 mb-4 py-4">
        <button
          onClick={() => setChartType('line')}
          className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${chartType === 'line' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Line Chart
        </button>
        <button
          onClick={() => setChartType('bar')}
          className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Bar Chart
        </button>
        <button
          onClick={() => setChartType('pie')}
          className={`py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${chartType === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          Pie Chart
        </button>
      </div>
      {renderChart()}
    </div>
  );
};

export default SalesChart;
