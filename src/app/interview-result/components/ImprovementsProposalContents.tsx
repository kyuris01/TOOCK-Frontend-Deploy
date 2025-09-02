import { InterviewImprovementProposal } from "@/app/api/interview/fetchInterviewResults";
import React, { useEffect } from "react";

const ImprovementsProposalContents = ({ data }: { data: InterviewImprovementProposal }) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <div className="font-semibold text-xl text-blue-600">강점</div>
        <ul className="list-disc list-inside">
          {data.strength.map((v) => {
            return (
              <li key={v.id} className="text-sm font-medium">
                {v.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="font-semibold text-xl text-red-600">약점</div>
        <ul className="list-disc list-inside">
          {data.weekness.map((v) => {
            return (
              <li key={v.id} className="text-sm font-medium">
                {v.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImprovementsProposalContents;
