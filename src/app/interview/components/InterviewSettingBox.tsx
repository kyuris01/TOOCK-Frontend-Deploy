"use client";

import React from "react";
import { INTERVIEW_SETTING_CONFIG } from "../constants/interviewSetting.constants";
import Dropdown from "@/app/ui/Dropdown/Dropdown";
import Button from "@/app/ui/Button";
import Play from "@/assets/play.svg";
import { INTERVIEW_RULES } from "../constants/interviewRules.constants";

const InterviewSettingBox = () => {
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
            <div>
              <div>{v.label}</div>
              <Dropdown />
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
          {INTERVIEW_RULES.map((v, _) => {
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
