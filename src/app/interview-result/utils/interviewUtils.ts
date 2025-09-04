/**
 * @param {string} eng - english ability name
 * @returns {string} kor - korean ability name
 */
export const getAbilName = (eng: string) => {
  switch (eng) {
    case "technic":
      return "기술 역량";
    case "communication":
      return "커뮤니케이션";
    case "logic":
      return "논리적 사고";
    case "problemSolving":
      return "문제 해결";
  }
};
