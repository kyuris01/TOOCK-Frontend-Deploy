"use client";

import React, { useEffect, useState } from "react";
import { INTERVIEW_SETTING_CONFIG } from "../constants/interviewSetting.constants";
import Dropdown from "@/app/ui/Dropdown/Dropdown";
import Button from "@/app/ui/Button";
import Play from "@/assets/play.svg";
import { INTERVIEW_RULES } from "../constants/interviewRules.constants";
import { fetchCompanyAndJobList } from "@/app/api/interview/fetchCompanyJobList";

interface InterviewSetting {
  id: number;
  label: string;
  data?: string[];
}

const mockData1 = ["apple", "meta", "삼성", "LG"];
const mockData2 = ["프론트엔드", "백엔드", "디자이너", "PM"];

const InterviewSettingBox = () => {
  const [interviewSettings, setInterviewSettings] =
    useState<InterviewSetting[]>(INTERVIEW_SETTING_CONFIG);
  const [companyList, setCompanyList] = useState<string[]>([]);
  const [jobList, setJobList] = useState<string[]>([]);

  useEffect(() => {
    fetchCompanyAndJobList().then((res) => {
      if (res === null) {
        setCompanyList([]);
      } else {
        setCompanyList(res.data.company);
        setJobList(res.data.job);
      }
    });
  }, []);

  useEffect(() => {
    const updatedSettings = INTERVIEW_SETTING_CONFIG.map((v, _) => {
      let data;
      switch (v.id) {
        case 0:
          data = companyList;
          break;
        case 1:
          data = jobList;
          break;
      }
      return { ...v, data: data };
    });
    setInterviewSettings(updatedSettings);
  }, [companyList, jobList]);

  const clickStartInterviewHandler = () => {};
  return (
    <div className="flex flex-col justify-between w-full h-[25rem] rounded-md border p-5">
      <div>
        <div className="text-lg">면접 설정</div>
        <div className="text-sm">지원하고자 하는 기업과 직무를 선택해주세요</div>
        <div className="text-sm">선택한 정보를 바탕으로 맞춤형 면접 질문이 생성됩니다</div>
      </div>

      <div className="flex flex-col gap-2">
        {INTERVIEW_SETTING_CONFIG.map((v, idx) => {
          return (
            <div key={v.id}>
              <div>{v.label}</div>
              {interviewSettings && <Dropdown dataList={interviewSettings[idx].data || []} />}
            </div>
          );
        })}
      </div>
      <Button
        label={"면접 시작하기"}
        width={"100%"}
        height={"2.5rem"}
        icon={<Play width="0.7rem" height="0.7rem" />}
        gradient="linear-gradient(90deg, #3b82f6, #a855f7)"
        clickHandler={clickStartInterviewHandler}
      />
      <div>
        <div>면접 진행 방식</div>
        <ul className="list-disc list-inside">
          {INTERVIEW_RULES.map((v) => {
            return (
              <li key={v.id} className="text-xs">
                {v.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InterviewSettingBox;
