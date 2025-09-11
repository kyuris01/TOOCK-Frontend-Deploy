import { client } from "../client";
import { InterviewResultApiResponse } from "../interview/fetchInterviewResults";

export const fetchInterviewRecordDetail = async (id: number) => {
  try {
    const response = await client.get(`interview-record-detail?id=${id}`).json<InterviewResultApiResponse>();
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("[Interview Record Detail Fetch Error]", error);
    return null;
  }
};
