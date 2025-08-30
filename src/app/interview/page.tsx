"use client";

import React, { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import InterviewContainer from "./components/InterviewContainer";
import { fetchInterviewQuestions } from "../api/interview/fetchInterviewQuestions";
import { useQuery } from "@tanstack/react-query";
import { useInterviewStore } from "@/stores/interview.store";
import MoonLoader from "react-spinners/MoonLoader";

const Page = () => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);
  const [questionNum, setQuestionNum] = useState<number>(0);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["questions"],
    queryFn: () => fetchInterviewQuestions(company, job),
  });

  useEffect(() => {
    console.log("data:", data);
  }, [data]);
  return (
    <div className="flex-1 p-3 bg-white">
      {data ? (
        <InterviewContainer
          question={data.data[questionNum].question}
          qNum={questionNum}
          setQuestionNum={setQuestionNum}
        />
      ) : (
        <MoonLoader />
      )}
    </div>
  );
};

export default Page;
