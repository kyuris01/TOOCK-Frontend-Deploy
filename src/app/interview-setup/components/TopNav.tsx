"use client";

import Button from "@/app/ui/Button";
import React from "react";
import LeftArrow from "@/assets/left-arrow.svg";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();

  const clickBackHandler = () => {
    router.back();
  };

  return (
    <div className="flex justify-center items-center w-full h-15 shadow-md px-3 sm:px-0 bg-white">
      <div className="flex justify-between items-center sm:w-[70%] w-[100%]">
        <Button
          label={"돌아가기"}
          icon={<LeftArrow width="0.7rem" height="0.7rem" className="text-white" />}
          clickHandler={clickBackHandler}
          color="white"
          bgColor="var(--color-blue-950)"
        />
      </div>
    </div>
  );
};

export default TopNav;
