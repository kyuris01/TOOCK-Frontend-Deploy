import React from "react";
import { STATS_CONFIG } from "../data/statsCards.config";
import StatsCard from "./StatsCard";
import { userStatistics } from "@/app/dashboard/mockData";

const StatSection = () => {
  const dataArr = Object.values(userStatistics);
  return (
    <div className="flex flex-row gap-5 w-[100%]">
      {STATS_CONFIG.map((item, index) => {
        return { ...item, data: dataArr[index] };
      }).map((item, _) => {
        return (
          <StatsCard
            key={item.id}
            title={item.title}
            Icon={item.icon}
            desc={item.desc}
            data={item.data}
            bgColor={item.bgColor}
            color={item.color}
          />
        );
      })}
    </div>
  );
};

export default StatSection;
