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
  http.get("*/interview-questions", ({ request }) => {
    const url = new URL(request.url);
    const company = url.searchParams.get("company");
    const job = url.searchParams.get("job");
    console.log(company, job);
    return HttpResponse.json({
      isSuccess: true,
      code: 200,
      message: "인터뷰 질문 조회 성공",
      data: [
        {
          id: 1,
          question: `${company}에 지원하게 된 동기는 무엇인가요?`,
        },
        {
          id: 2,
          question: `${job} 직무에 관심을 가지게된 이유는 무엇인가요?`,
        },
        {
          id: 3,
          question: `${job} 직무에 대하여 본인이 가지고 있는 기술 스택에 대해 알려주세요.`,
        },
        {
          id: 4,
          question: `${job} 직무와 관련해 수행했던 프로젝트 경험에 대해 설명해주세요`,
        },
      ],
    });
  }),
];
