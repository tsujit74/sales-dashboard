export const salesData = [
  // 2022 Data
  { month: "Jan", year: 2022, sales: 1200, revenue: 24000, product: "Dark Chocolate" },
  { month: "Feb", year: 2022, sales: 1100, revenue: 22000, product: "Dark Chocolate" },
  { month: "Mar", year: 2022, sales: 1350, revenue: 27000, product: "Dark Chocolate" },
  { month: "Apr", year: 2022, sales: 1250, revenue: 25000, product: "Dark Chocolate" },
  { month: "May", year: 2022, sales: 1400, revenue: 28000, product: "Dark Chocolate" },
  { month: "Jun", year: 2022, sales: 1500, revenue: 30000, product: "Dark Chocolate" },
  { month: "Jul", year: 2022, sales: 1600, revenue: 32000, product: "Dark Chocolate" },
  { month: "Aug", year: 2022, sales: 1550, revenue: 31000, product: "Dark Chocolate" },
  { month: "Sep", year: 2022, sales: 1450, revenue: 29000, product: "Dark Chocolate" },
  { month: "Oct", year: 2022, sales: 1650, revenue: 33000, product: "Dark Chocolate" },
  { month: "Nov", year: 2022, sales: 1800, revenue: 36000, product: "Dark Chocolate" },
  { month: "Dec", year: 2022, sales: 2100, revenue: 42000, product: "Dark Chocolate" },

  // 2023 Data
  { month: "Jan", year: 2023, sales: 1300, revenue: 26000, product: "Milk Chocolate" },
  { month: "Feb", year: 2023, sales: 1250, revenue: 25000, product: "Milk Chocolate" },
  { month: "Mar", year: 2023, sales: 1450, revenue: 29000, product: "Milk Chocolate" },
  { month: "Apr", year: 2023, sales: 1400, revenue: 28000, product: "Milk Chocolate" },
  { month: "May", year: 2023, sales: 1550, revenue: 31000, product: "Milk Chocolate" },
  { month: "Jun", year: 2023, sales: 1650, revenue: 33000, product: "Milk Chocolate" },
  { month: "Jul", year: 2023, sales: 1750, revenue: 35000, product: "Milk Chocolate" },
  { month: "Aug", year: 2023, sales: 1700, revenue: 34000, product: "Milk Chocolate" },
  { month: "Sep", year: 2023, sales: 1600, revenue: 32000, product: "Milk Chocolate" },
  { month: "Oct", year: 2023, sales: 1800, revenue: 36000, product: "Milk Chocolate" },
  { month: "Nov", year: 2023, sales: 1950, revenue: 39000, product: "Milk Chocolate" },
  { month: "Dec", year: 2023, sales: 2250, revenue: 45000, product: "Milk Chocolate" },

  // 2024 Data
  { month: "Jan", year: 2024, sales: 1400, revenue: 28000, product: "White Chocolate" },
  { month: "Feb", year: 2024, sales: 1350, revenue: 27000, product: "White Chocolate" },
  { month: "Mar", year: 2024, sales: 1550, revenue: 31000, product: "White Chocolate" },
  { month: "Apr", year: 2024, sales: 1500, revenue: 30000, product: "White Chocolate" },
  { month: "May", year: 2024, sales: 1650, revenue: 33000, product: "White Chocolate" },
  { month: "Jun", year: 2024, sales: 1750, revenue: 35000, product: "White Chocolate" },
  { month: "Jul", year: 2024, sales: 1850, revenue: 37000, product: "White Chocolate" },
  { month: "Aug", year: 2024, sales: 1800, revenue: 36000, product: "White Chocolate" },
  { month: "Sep", year: 2024, sales: 1700, revenue: 34000, product: "White Chocolate" },
  { month: "Oct", year: 2024, sales: 1900, revenue: 38000, product: "White Chocolate" },
  { month: "Nov", year: 2024, sales: 2050, revenue: 41000, product: "White Chocolate" },
  { month: "Dec", year: 2024, sales: 2350, revenue: 47000, product: "White Chocolate" },
];

export const getYearlyTotals = () => {
  const yearlyData = [2022, 2023, 2024].map(year => {
    const yearData = salesData.filter(data => data.year === year);
    const totalSales = yearData.reduce((sum, item) => sum + item.sales, 0);
    const totalRevenue = yearData.reduce((sum, item) => sum + item.revenue, 0);
    return {
      year,
      totalSales,
      totalRevenue,
    };
  });
  return yearlyData;
};