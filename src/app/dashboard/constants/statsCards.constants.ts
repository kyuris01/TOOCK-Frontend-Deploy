import Calendar from "@/assets/calendar.svg";
import Trophy from "@/assets/trophy.svg";
import StatBoard from "@/assets/statistic_board.svg";
import Up from "@/assets/up.svg";

export const STATS_CONFIG = [
  {
    id: 1,
    title: "총 면접 횟수",
    icon: StatBoard,
    desc: "지금까지 진행한 면접",
    bgColor: "#e6f1ff",
    color: "#1e40af",
  },
  {
    id: 2,
    title: "평균 점수",
    icon: Up,
    desc: "전체 면접 평균 점수",
    bgColor: "#e6f1ff",
    color: "#1e40af",
  },
  {
    id: 3,
    title: "최고 점수",
    icon: Trophy,
    desc: "개인 최고 기록",
    bgColor: "#e6f1ff",
    color: "#1e40af",
  },
  {
    id: 4,
    title: "이번 주",
    icon: Calendar,
    desc: "이번 주 면접 횟수",
    bgColor: "#e6f1ff",
    color: "#1e40af",
  },
];
