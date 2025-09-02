"use client";

import { fetchInterviewResults } from "@/app/api/interview/fetchInterviewResults";
import { useInterviewStore } from "@/stores/interview.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const InterviewResultContainer = () => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["interview-results", company, job],
    queryFn: () => fetchInterviewResults(company, job),
  });
  return (
    <div className="flex flex-row items-center justify-start w-full h-full sm:w-[70%] bg-white mt-3">
      <div className="flex flex-col justify-start w-[40%] h-full"></div>
      <div className="flex flex-col justify-start w-[60%] h-full"></div>
    </div>
  );
};

export default InterviewResultContainer;
