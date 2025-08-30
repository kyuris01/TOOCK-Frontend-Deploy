import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import Button from "@/app/ui/Button";

interface Props {
  question: string;
  qNum: number;
  setQuestionNum: React.Dispatch<React.SetStateAction<number>>;
}

const InterviewContainer = ({ question, qNum, setQuestionNum }: Props) => {
  return (
    <div className="flex flex-col gap-3 w-full h-[30rem]">
      <QuestionBox question={question} qNum={qNum} />
      <AnswerBox />
      <Button label={"다음 질문"} clickHandler={() => setQuestionNum((prev) => prev++)} />
    </div>
  );
};

export default InterviewContainer;
