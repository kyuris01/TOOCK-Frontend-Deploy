"use client";

import Button from "@/app/ui/Button";
import { useInterviewStore } from "@/stores/interview.store";
import { useRouter } from "next/navigation";
import React from "react";
import { BeatLoader } from "react-spinners";

const TopNav = () => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);
  const router = useRouter();

  const exitBtnClickHandler = () => {
    router.push("/dashboard");
  };
  return (
    <div className="flex flex-row justify-between items-center w-full h-15 bg-white px-5">
      <div className="flex flex-row justify-start items-center gap-5">
        <BeatLoader speedMultiplier={0.5} />
        <div className="flex flex-row gap-3">
          <div className="flex justify-center items-center rounded-2xl border-2 border-black px-3 py-1 text-xs">
            {company}
          </div>
          <div className="flex justify-center items-center rounded-2xl border-2 border-black px-3 py-1 text-xs">
            {job}
          </div>
        </div>
      </div>
      <Button
        label={"면접 종료"}
        clickHandler={exitBtnClickHandler}
        color="black"
        hoverColor="white"
        bgColor="white"
        hoverBgColor="black"
        border={"solid 1px black"}
      />
    </div>
  );
};

export default TopNav;
