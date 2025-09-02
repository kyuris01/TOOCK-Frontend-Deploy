import { InterviewDetailScore } from "@/app/api/interview/fetchInterviewResults";
import ProgressBar from "@/app/ui/ProgressBar/ProgressBar";
import React from "react";

const DetailScoreContents = ({ data }: { data: InterviewDetailScore }) => {
  /**
   * @param {string} eng - english ability name
   * @returns {string} kor - korean ability name
   */
  const getAbilName = (eng: string) => {
    switch (eng) {
      case "technic":
        return "기술 역량";
      case "communication":
        return "커뮤니케이션";
      case "logic":
        return "논리적 사고";
      case "problemSolving":
        return "문제 해결";
    }
  };
  return (
    <div className="flex flex-col justify-start gap-3 w-full">
      {Object.entries(data).map((v) => {
        return (
          <div className="flex flex-col justify-start items-center w-full">
            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="font-bold">{getAbilName(v[0])}</div>
              <div className="font-semibold">{v[1]}/10</div>
            </div>
            <ProgressBar
              bgColor={"white"}
              color={"#3b82f6"}
              percentage={v[1] * 10}
              height={"1rem"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DetailScoreContents;
