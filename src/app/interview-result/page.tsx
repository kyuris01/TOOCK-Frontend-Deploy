import React from "react";
import TopNav from "./components/TopNav";
import InterviewResultContainer from "./components/InterviewResultContainer";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-white">
      <TopNav />
      <InterviewResultContainer />
    </div>
  );
};

export default Page;
