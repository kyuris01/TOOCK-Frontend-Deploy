import { useInterviewStore } from "@/stores/interview.store";
import React from "react";
import { INTERVIEW_RULES_DETAIL } from "../constants/interviewRules.constants";
import Button from "@/app/ui/Button";
import { useRouter } from "next/navigation";

const InterviewSettingModal = ({
  setIsModal,
}: {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const company = useInterviewStore((s) => s.selectedCompany);
  const job = useInterviewStore((s) => s.selectedJob);

  const cancelBtnClickHandler = () => {
    setIsModal(false);
  };

  const startInterviewBtnClickHandler = () => {};

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div>
        <div className="flex justify-center items-center text-2xl">면접 준비</div>
        <div className="flex justify-center items-center text-sm text-slate-400">
          {company}-{job} 면접을 시작합니다!
        </div>
      </div>
      <div>
        <ul className="list-disc list-inside">
          {INTERVIEW_RULES_DETAIL.map((v) => {
            return (
              <li key={v.id} className="px-5 text-lg">
                {v.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row w-full">
        <Button
          label={"취소"}
          clickHandler={cancelBtnClickHandler}
          width="50%"
          color="black"
          hoverColor="white"
          bgColor="white"
          hoverBgColor="black"
        />
        <Button
          label={"면접 시작"}
          clickHandler={startInterviewBtnClickHandler}
          width="50%"
          color="black"
          hoverColor="white"
          bgColor="white"
          hoverBgColor="black"
        />
      </div>
    </div>
  );
};

export default InterviewSettingModal;
