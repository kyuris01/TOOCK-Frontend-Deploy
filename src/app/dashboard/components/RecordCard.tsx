import React from "react";

interface Props {
  company: string;
  job: string;
  date: string;
  totalScore: number;
  totalQuestionNum: number;
}

const RecordCard = ({ company, job, date, totalScore, totalQuestionNum }: Props) => {
  return (
    <div className="flex flex-col justify-start items-center gap-1 p-3 rounded-md border">
      <div className="flex flex-row justify-start items-center gap-3 w-full">
        <div className="font-semibold text-xl">{company}</div>
        <div className="rounded-xl bg-slate-500 text-white text-sm px-3">{job}</div>
      </div>
      <div className="flex flex-row justify-start items-center w-full text-sm text-slate-400">
        {date}
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="font-semibold px-3 rounded-xl border-1 border-blue-500 bg-blue-200">
          {totalScore}/10
        </div>
        <div className="text-sm text-slate-400">{totalQuestionNum}개 질문</div>
      </div>
    </div>
  );
};

export default RecordCard;
