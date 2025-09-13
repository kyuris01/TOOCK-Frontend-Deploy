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
  const router = useRouter();

  const cancelBtnClickHandler = () => {
    setIsModal(false);
  };

  const startInterviewBtnClickHandler = () => {
    router.push(`/interview`);
  };

  return (
    <div className="flex flex-col justify-between w-full h-full text-blue-950">
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
              <li key={v.id} className="px-5 text-sm sm:text-lg">
                {v.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row gap-2 w-full">
        <Button
          label={"취소"}
          clickHandler={cancelBtnClickHandler}
          width="50%"
          bgColor="white"
          color="var(--color-blue-950)"
          border="solid 1px var(--color-blue-950)"
        />
        <Button
          label={"면접 시작"}
          clickHandler={startInterviewBtnClickHandler}
          width="50%"
          bgColor="var(--color-blue-950)"
          color="white"
        />
      </div>
    </div>
  );
};

export default InterviewSettingModal;
