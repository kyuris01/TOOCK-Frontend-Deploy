"use client";

import { fetchCompanyAndJobList } from "@/app/api/interview/fetchCompanyJobList";
import Dropdown from "@/app/ui/Dropdown/Dropdown";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import MagnifyingGlasses from "@/assets/magnifying-glasses.svg";

const SearchBar = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<string>("");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["company-job-list"],
    queryFn: () => fetchCompanyAndJobList(),
  });
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <div className="flex flex-row items-center justify-start gap-3 w-full sm:w-[60%] rounded-md border px-3 py-1">
        <MagnifyingGlasses width={"1.2rem"} height={"1.2rem"} />
        <input className="w-full" type="text" placeholder="기업명 또는 직무를 입력하세요" />
      </div>
      <div className="flex flex-row items-center justify-between gap-1 w-full sm:w-[40%]">
        <div className="w-[50%]">
          <Dropdown
            dataList={data?.data.company ?? []}
            onChange={setSelectedCompany}
            value={selectedCompany}
          />
        </div>
        <div className="w-[50%]">
          <Dropdown dataList={data?.data.job ?? []} onChange={setSelectedJob} value={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
