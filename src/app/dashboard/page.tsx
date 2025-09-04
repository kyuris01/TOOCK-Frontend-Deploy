import TopNav from "./components/TopNav";
import StatSection from "./components/StatSection";
import SearchBar from "./components/SearchBar";
import RecordSection from "./components/RecordSection";

const Page = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-white w-[100vw] h-[100vh]">
      <TopNav />
      <div className="flex flex-col justify-start gap-5 bg-white w-[100%] sm:w-[70%] mt-5 p-3 sm:p-0">
        <StatSection />
        <SearchBar />
        <RecordSection />
      </div>
    </div>
  );
};

export default Page;
