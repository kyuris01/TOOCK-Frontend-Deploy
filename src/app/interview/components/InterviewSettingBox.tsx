import React from "react";
import { INTERVIEW_SETTING_CONFIG } from "../data/interviewSetting.config";
import Dropdown from "@/app/ui/Dropdown/Dropdown";

const InterviewSettingBox = () => {
  return (
    <div className="flex flex-col w-full h-[20rem] rounded-md border p-5">
      <div>면접 설정</div>
      <div>지원하고자 하는 기업과 직무를 선택해주세요</div>
      <div>선택한 정보를 바탕으로 맞춤형 면접 질문이 생성됩니다</div>
      <div>
        {INTERVIEW_SETTING_CONFIG.map((v, idx) => {
          return (
            <div>
              <div>{v.label}</div>
              <Dropdown />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InterviewSettingBox;
