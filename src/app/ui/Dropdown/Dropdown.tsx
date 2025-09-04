"use client";

import React, { useEffect, useState } from "react";
import DownArrow from "@/assets/down-arrow.svg";
import DropdownList from "./DropdownList";

interface Props {
  dataList: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ dataList, value, onChange }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col w-full">
      <div
        onClick={() => {
          setClicked((prev) => !prev);
        }}
        className="flex flex-row items-center justify-between w-full h-[2.5rem] border border-b-2 rounded-md p-2"
      >
        <div className="w-full truncate">{value}</div>
        <DownArrow width="0.7rem" height="0.7rem" />
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
