import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("*/company-job-list", ({ request }) => {
    return HttpResponse.json({
      isSuccess: true,
      code: 200,
      message: "회사 리스트 조회 성공",
      data: {
        company: ["애플", "메타", "삼성", "아마존"],
        job: ["백엔드 개발자", "프론트엔드 개발자", "PM"],
      },
    });
  }),
];
