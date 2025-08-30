import TopNav from "./components/TopNav";

export default function InterviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-start w-full h-full">
      <TopNav />
      {children}
    </div>
  );
}
