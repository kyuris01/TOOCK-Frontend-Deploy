import React from "react";

interface Props {
  bgColor: string;
  color: string;
  percentage: number;
  height: string;
}

const ProgressBar = ({ bgColor, color, percentage, height }: Props) => {
  return (
    <div
      className="w-full relative rounded-3xl z-999"
      style={{ height: `${height}`, backgroundColor: `${bgColor}` }}
    >
      <div
        className="absolute top-0 left-0 rounded-3xl z-1000"
        style={{ width: `${percentage}%`, height: `${height}`, backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
