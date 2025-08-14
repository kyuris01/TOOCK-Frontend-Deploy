import React from "react";

interface StatsCardProps {
  title: string;
  Icon: React.ElementType<{ className?: string }>;
  data: number;
  desc: string;
  bgColor: string;
  color: string;
}

const StatsCard = ({ title, Icon, data, desc, bgColor, color }: StatsCardProps) => {
  return (
    <div
      className="flex flex-col justify-between gap-2 w-[100%] h-[8rem] rounded-2xl p-[1rem]"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="flex flex-row justify-between">
        <div className="font-bold">{title}</div>
        <div>
          <Icon className="w-5 h-5" style={{ color: color }} />
        </div>
      </div>
      <div className="text-2xl">{data}</div>
      <div className="text-xs">{desc}</div>
    </div>
  );
};

export default StatsCard;
