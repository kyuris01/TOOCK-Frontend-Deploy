"use client";

import { useState } from "react";

interface Props {
  label?: string;
  width?: number;
  height?: number;
  bgColor?: string;
  color?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  gradient?: string;
  icon?: React.ReactNode;
  clickHandler: () => void;
}

const Button = ({
  label,
  width = 6.5,
  height = 2.5,
  bgColor,
  color,
  hoverBgColor,
  hoverColor,
  icon,
  gradient,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentBgColor = isHovered ? hoverBgColor : bgColor;
  const currentColor = isHovered ? hoverColor : color;

  return (
    <div
      className="flex flex-row justify-center items-center px-4 py-2 font-bold rounded-md gap-2 group cursor-pointer select-none"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        backgroundColor: currentBgColor,
        color: currentColor,
        backgroundImage: gradient,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <div className="text-xs">{label}</div>
    </div>
  );
};

export default Button;
