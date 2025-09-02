"use client";

import { fetchInterviewResults } from "@/app/api/interview/fetchInterviewResults";
import { useInterviewStore } from "@/stores/interview.store";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { COLUMN1 } from "../constants/InterviewResults.contants";
import ResultCard from "./ResultCard";
import TotalScoreContentsComp from "./TotalScoreContentsComp";

const InterviewResultContainer = () => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["interview-results", company, job],
    queryFn: () => fetchInterviewResults(company, job),
  });

  useEffect(() => {
    if (data) {
      COLUMN1[0].data = <TotalScoreContentsComp data={data.totalScore} />;
    }
  }, [data]);

  return (
    <div className="flex flex-row items-center justify-start w-full h-full sm:w-[70%] bg-white mt-3">
      <div className="flex flex-col justify-start w-[40%] h-full">
        {COLUMN1.map((v, idx) => {
          return <ResultCard />;
        })}
      </div>
      <div className="flex flex-col justify-start w-[60%] h-full"></div>
    </div>
  );
};

export default InterviewResultContainer;
