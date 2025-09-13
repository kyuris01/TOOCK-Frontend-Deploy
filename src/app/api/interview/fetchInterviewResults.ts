import { ApiResponse, client } from "../client";

export type InterviewDetailScore = {
  technic: number;
  communication: number;
  logic: number;
  problemSolving: number;
};

export type InterviewQandA = {
  id: number;
  question: string;
  answer: string;
};

export type InterviewImprovementProposalData = {
  id: number;
  text: string;
};

export type InterviewImprovementProposal = {
  strength: InterviewImprovementProposalData[];
  weekness: InterviewImprovementProposalData[];
};

export interface InterviewResult {
  totalScore: number;
  detailScore: InterviewDetailScore;
  AIfeedback: string;
  questionAndAnswer: InterviewQandA[];
  improvementProposal: InterviewImprovementProposal;
}

export interface InterviewResultApiResponse extends ApiResponse {
  data: InterviewResult;
}

export const fetchInterviewResults = async (company: string, job: string) => {
  try {
    const response = await client
      .get("interview-results?company=${company}&job=${job}")
      .json<InterviewResultApiResponse>();
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("[Interview Results Fetch Error]", error);
    return null;
  }
};
