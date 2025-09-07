"use client";

import { fetchCompanyAndJobList } from "@/app/api/interview/fetchCompanyJobList";
import Dropdown from "@/app/ui/Dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import MagnifyingGlasses from "@/assets/magnifying-glasses.svg";

interface Props {
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
  setSelectedJob: React.Dispatch<React.SetStateAction<string>>;
  selectedCompany: string;
  selectedJob: string;
  color?: string;
  bgColor?: string;
}

const SearchBar = ({
  setUserInput,
  setSelectedCompany,
  setSelectedJob,
  selectedCompany,
  selectedJob,
  color,
  bgColor,
}: Props) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["company-job-list"],
    queryFn: () => fetchCompanyAndJobList(),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full p-3 rounded-md shadow-lg ring-1 ring-blue-950">
      <div
        className="flex flex-row items-center justify-start gap-3 w-full sm:w-[60%] rounded-md px-3 py-1"
        style={{ color: color, borderColor: color, backgroundColor: bgColor }}
      >
        <MagnifyingGlasses width={"1.2rem"} height={"1.2rem"} />
        <input
          className="w-full"
          type="text"
          placeholder="기업명 또는 직무를 입력하세요"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-row items-center justify-between gap-1 w-full sm:w-[40%]">
        <div className="w-[50%]">
          <Dropdown
            dataList={data?.data.company ?? []}
            onChange={setSelectedCompany}
            value={selectedCompany}
            color={"#162456"}
            bgColor={"#e6f1ff"}
          />
        </div>
        <div className="w-[50%]">
          <Dropdown
            dataList={data?.data.job ?? []}
            onChange={setSelectedJob}
            value={selectedJob}
            color={"#162456"}
            bgColor={"#e6f1ff"}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
