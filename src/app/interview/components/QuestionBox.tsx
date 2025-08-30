import Button from "@/app/ui/Button";
import React from "react";
import Play from "@/assets/play.svg";

const QuestionBox = ({ question, qNum }: { question: string; qNum: number }) => {
  const listenAgainBtnClickHandler = () => {};
  return (
    <div className="flex flex-col justify-between w-full h-[6rem] bg-slate-400 rounded-md p-3">
      <div className="flex flex-row justify-between items-center">
        <div className="text-xl font-semibold">질문 {qNum + 1}</div>
        <Button
          label={"다시 듣기"}
          clickHandler={listenAgainBtnClickHandler}
          icon={<Play width="0.7rem" height="0.7rem" />}
          border="solid black 1px"
        />
      </div>
      <div>{question}</div>
    </div>
  );
};

export default QuestionBox;
