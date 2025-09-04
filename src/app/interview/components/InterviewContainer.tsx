import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import Button from "@/app/ui/Button";
import { useAudioRecorder } from "@/utils/useAudioRecorder";

interface Props {
  question: string;
  qNum: number;
  totalQNum: number;
  setQuestionNum: React.Dispatch<React.SetStateAction<number>>;
}

const InterviewContainer = ({ question, qNum, totalQNum, setQuestionNum }: Props) => {
  const { reset } = useAudioRecorder();
  const answerResetBtnHandler = () => {
    reset();
  };
  const nextBtnHandler = () => {
    if (qNum === totalQNum) {
    } else {
      setQuestionNum((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-3 w-full h-[30rem]">
      <QuestionBox question={question} qNum={qNum} />
      <AnswerBox />
      <div className="flex flex-row items-center justify-between">
        <Button
          label={"답변 초기화"}
          clickHandler={answerResetBtnHandler}
          border="solid black 1px"
        />
        <div className="flex flex-row gap-3">
          <Button
            label={"건너뛰기"}
            clickHandler={() => setQuestionNum((prev) => prev + 1)}
            border="solid black 1px"
          />
          <Button label={"다음 질문"} clickHandler={nextBtnHandler} border="solid black 1px" />
        </div>
      </div>
    </div>
  );
};

export default InterviewContainer;
