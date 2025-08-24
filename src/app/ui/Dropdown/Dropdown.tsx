"use client";

import React, { useState } from "react";
import DownArrow from "@/assets/down-arrow.svg";
import DropdownList from "./DropdownList";

const Dropdown = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  return (
    <div className="relative flex flex-col w-full">
      <div
        onClick={() => {
          setClicked((prev) => !prev);
        }}
        className="flex flex-row items-center justify-between w-full h-[2rem] border border-b-2 rounded-md p-2"
      >
        <div>{selectedItem}</div>
        <DownArrow width="0.7rem" height="0.7rem" />
      </div>

      {clicked && (
        <DropdownList
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setClicked={setClicked}
        />
      )}
    </div>
  );
};

export default Dropdown;
