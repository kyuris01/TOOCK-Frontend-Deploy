import TopNav from "./components/TopNav";
import StatSection from "./components/StatSection";

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-5 bg-white w-[100vw] h-[100vh]">
      <TopNav />
      <div className="bg-white w-[100%] sm:w-[70%] mt-3">
        <StatSection />
      </div>
    </div>
  );
};

export default Page;
