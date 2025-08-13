// components/molecules/KPI.tsx
import React from "react";
import { IconType } from "react-icons";

interface KPIProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
  Icon?: IconType;
}

export default function KPI({
  title,
  value,
  subtitle,
  color = "bg-blue-500",
  Icon,
}: KPIProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md text-gray-700 ${color} hover:shadow-lg transition-all`}
    >
      {Icon && <Icon size={28} className="mb-2" />}
      <span className="text-sm opacity-80">{title}</span>
      <span className="text-2xl font-bold">{value}</span>
      {subtitle && <span className="text-xs opacity-70">{subtitle}</span>}
    </div>
  );
}
