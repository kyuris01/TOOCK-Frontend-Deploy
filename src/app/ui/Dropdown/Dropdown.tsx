"use client";

import React, { useState } from "react";
import DownArrow from "@/assets/down-arrow.svg";
import DropdownList from "./DropdownList";

interface Props {
  dataList: string[];
  value: string;
  onChange: (value: string) => void;
  color?: string;
  bgColor?: string;
}

const Dropdown = ({ dataList, value, onChange, color, bgColor }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col w-full" style={{ backgroundColor: bgColor }}>
      <div
        onClick={() => {
          setClicked((prev) => !prev);
        }}
        className="flex flex-row items-center justify-between w-full h-[2.5rem] border rounded-md p-2"
        style={{ borderColor: color }}
      >
        <div className="w-full truncate" style={{ color: color }}>
          {value}
        </div>
        <DownArrow width="0.7rem" height="0.7rem" color="white" />
      </div>

      {clicked && (
        <DropdownList
          selectedItem={value}
          setSelectedItem={onChange}
          setClicked={setClicked}
          dataList={dataList}
        />
      )}
    </div>
  );
};

export default Dropdown;
