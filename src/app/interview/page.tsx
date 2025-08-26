import InterviewSettingBox from "./components/InterviewSettingBox";
import TopNav from "./components/TopNav";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 min-h-screen w-full bg-white">
      <TopNav />
      <div className="w-[100%] sm:w-[70%] mt-3 p-3 sm:p-0">
        <InterviewSettingBox />
      </div>
    </div>
  );
};

export default Page;
