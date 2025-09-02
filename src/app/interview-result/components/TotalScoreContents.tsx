import React from "react";

interface Props {
  data: number;
}

const TotalScoreContents = ({ data }: Props) => {
  const getGrade = (score: number) => {
    if (score <= 2) {
      return "미흡";
    } else if (score <= 4) {
      return "부족";
    } else if (score <= 6) {
      return "보통";
    } else if (score <= 8) {
      return "우수";
    } else {
      return "탁월";
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-2xl font-semibold">{data}/10</div>
      <div className="flex items-center justify-center w-[3rem] rounded-3xl bg-black text-white text-base font-medium">
        {getGrade(data)}
      </div>
    </div>
  );
};

export default TotalScoreContents;
