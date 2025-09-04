import { ApiResponse, client } from "../client";

interface InterviewRecord {
  id: number;
  company: string;
  job: string;
  date: string;
  totalScore: number;
  totalQuestionNum: number;
}

interface InterviewRecordResponse extends ApiResponse {
  data: InterviewRecord[];
}

export const fetchInterviewRecords = async () => {
  try {
    const response = await client.get(`interview-records`).json<InterviewRecordResponse>();
    console.log(response);
    return response;
  } catch (error) {
    console.error("[Interview Records Fetch Error]", error);
    return null;
  }
};
