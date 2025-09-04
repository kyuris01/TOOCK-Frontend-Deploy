"use client";

import { useState } from "react";

interface Props {
  label?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  border?: string;
  gradient?: string;
  icon?: React.ReactNode;
  clickHandler: () => void;
}

const Button = ({
  label,
  width,
  height,
  bgColor,
  color,
  hoverBgColor,
  hoverColor,
  border,
  icon,
  gradient,
  clickHandler,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const currentBgColor = isHovered ? hoverBgColor : bgColor;
  const currentColor = isHovered ? hoverColor : color;

  return (
    <div
      className="flex flex-row justify-center items-center px-4 py-2 font-bold rounded-md gap-2 group cursor-pointer select-none"
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: currentBgColor,
        color: currentColor,
        backgroundImage: gradient,
        border: `${border}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={clickHandler}
    >
      {icon}
      <div className="text-xs">{label}</div>
    </div>
  );
};

export default Button;
