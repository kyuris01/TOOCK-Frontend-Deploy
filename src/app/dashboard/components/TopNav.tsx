"use client";

import Button from "../../ui/Button";
import Logo from "@/assets/logo.svg";
import Play from "@/assets/play.svg";
import Logout from "@/assets/logout.svg";

import { userName } from "../mockData";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();

  const clickInterviewHandler = () => {
    router.push("/interview-setup");
  };
  const clickLogoutHandler = () => {};
  return (
    <div className="flex justify-center items-center w-full h-15 shadow-md">
      <div className="flex justify-between items-center sm:w-[70%] w-[100%]">
        <div className="flex flex-row">
          <Logo className="w-16 h-16 text-blue-950" />
          <div className="flex flex-col justify-center">
            <div className="hidden sm:block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg font-bold">
              AI Interview Service
            </div>
            <div className="hidden sm:block text-sm font-semibold text-slate-400">
              지원자 {userName}님, 환영합니다!
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Button
            label={"면접 시작"}
            icon={<Play width="0.7rem" height="0.7rem" />}
            gradient="linear-gradient(90deg, #3b82f6, #a855f7)"
            clickHandler={clickInterviewHandler}
          />
          <Button
            label={"로그아웃"}
            icon={
              <Logout
                width="0.7rem"
                height="0.7rem"
                className="text-black group-hover:text-white"
              />
            }
            clickHandler={clickLogoutHandler}
            color="black"
            hoverColor="white"
            bgColor="white"
            hoverBgColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
