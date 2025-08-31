import TopNav from "./components/TopNav";

export default function InterviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full bg-white">
      <TopNav />
      <div className="bg-white w-[100%] sm:w-[70%] h-full mt-3">{children}</div>
    </div>
  );
}
