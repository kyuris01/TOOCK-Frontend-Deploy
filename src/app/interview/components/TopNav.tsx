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
    <div className="flex justify-center items-center w-full h-15 shadow-xl">
      <div className="flex justify-between items-center sm:w-[70%] w-[100%]">
        <Button
          label={"돌아가기"}
          icon={
            <LeftArrow
              width="0.7rem"
              height="0.7rem"
              className="text-black group-hover:text-white"
            />
          }
          clickHandler={clickBackHandler}
          color="black"
          hoverColor="white"
          bgColor="white"
          hoverBgColor="black"
        />
      </div>
    </div>
  );
};

export default TopNav;
