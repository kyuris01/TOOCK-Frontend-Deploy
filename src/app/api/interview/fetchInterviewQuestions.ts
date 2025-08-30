import { ApiResponse, client } from "../client";

interface InterviewQuestion {
  id: number;
  question: string;
}

interface InterviewQuestionApiResponse extends ApiResponse {
  data: InterviewQuestion[];
}

export const fetchInterviewQuestions = async (company: string, job: string) => {
  try {
    const response = await client
      .get(`interview-questions?company=${company}&job=${job}`)
      .json<InterviewQuestionApiResponse>();
    console.log(response);
    return response;
  } catch (error) {
    console.error("[Interview Question Fetch Error]", error);
    return null;
  }
};
