"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  dataList: string[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownList = ({ dataList, selectedItem, setSelectedItem, setClicked }: Props) => {
  const itemClickHandler = (v: string) => {
    setSelectedItem(v);
    setClicked(false);
  };
  return (
    <div
      className="
    absolute top-[2.3rem] left-0 
    flex flex-col
    w-full 
    border border-b-2
    z-999 
    rounded-md
    bg-white
    "
    >
      {dataList.map((v, idx) => {
        return (
          <div
            key={idx}
            onClick={() => itemClickHandler(v)}
            className={clsx(
              "flex items-center justify-start h-8 mx-1 my-1 px-2 rounded-md",
              v === selectedItem ? "bg-slate-500 text-white" : ""
            )}
          >
            {v}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownList;
