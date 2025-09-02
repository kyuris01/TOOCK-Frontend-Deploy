"use client";

import { fetchInterviewResults } from "@/app/api/interview/fetchInterviewResults";
import { useInterviewStore } from "@/stores/interview.store";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { COLUMN1 } from "../constants/InterviewResults.contants";
import ResultCard from "./ResultCard";
import TotalScoreContentsComp from "./TotalScoreContents";

const InterviewResultContainer = () => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["interview-results", company, job],
    queryFn: () => fetchInterviewResults(company, job),
  });

  const getContentOfColumn1 = (item: (typeof COLUMN1)[number]) => {
    if (item.title === "종합 점수" && data) {
      return <TotalScoreContentsComp data={data.totalScore} />;
    } else if (item.title === "세부 평가" && data) {
      return;
    }
    return null;
  };

  return (
    <div className="flex flex-row items-center justify-start w-full h-full sm:w-[70%] bg-white mt-3">
      <div className="flex flex-col justify-start w-[40%] h-full gap-5">
        {COLUMN1.map((v) => {
          return (
            <ResultCard
              key={v.id}
              title={v.title}
              subtitle={v.subtitle}
              content={getContentOfColumn1(v)}
            />
          );
        })}
      </div>
      <div className="flex flex-col justify-start w-[60%] h-full"></div>
    </div>
  );
};

export default InterviewResultContainer;
