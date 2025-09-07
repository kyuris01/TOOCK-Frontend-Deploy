"use client";

import TopNav from "./components/TopNav";
import StatSection from "./components/StatSection";
import SearchBar from "./components/SearchBar";
import RecordSection from "./components/RecordSection";
import { useState } from "react";

const Page = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string>("");

  return (
    <div className="flex flex-col justify-start items-center bg-blue-950 w-full min-h-dvh">
      <TopNav />
      <div className="flex flex-col justify-start gap-5 w-[100%] sm:w-[70%] mt-5 p-3 sm:p-0 flex-1">
        <StatSection />
        <SearchBar
          setUserInput={setUserInput}
          setSelectedCompany={setSelectedCompany}
          setSelectedJob={setSelectedJob}
          selectedCompany={selectedCompany}
          selectedJob={selectedJob}
          color={"white"}
        />
        <RecordSection
          userInput={userInput}
          selectedCompany={selectedCompany}
          selectedJob={selectedJob}
          setSelectedCompany={setSelectedCompany}
          setSelectedJob={setSelectedJob}
        />
      </div>
    </div>
  );
};

export default Page;
