"use client";

import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import Button from "@/app/ui/Button";
import { useAudioRecorder } from "@/utils/useAudioRecorder";
import { useInterviewDataStore } from "@/stores/interviewData.store";
import { useRouter } from "next/navigation";
import { sendInterviewData } from "@/app/api/interview/sendInterviewData";

interface Props {
  question: string;
  qNum: number;
  totalQNum: number;
  setQuestionNum: React.Dispatch<React.SetStateAction<number>>;
}

const InterviewContainer = ({ question, qNum, totalQNum, setQuestionNum }: Props) => {
  // const { reset } = useAudioRecorder();
  // const answerResetBtnHandler = () => {
  //   reset();
  // };
  const router = useRouter();
  const { isRecording, start, stop, togglePause, audioURL, audioBlob } = useAudioRecorder();
  const addResponse = useInterviewDataStore((s) => s.addResponse);

  const nextBtnHandler = async () => {
    if (++qNum === totalQNum) {
      addResponse({ blob: audioBlob as Blob, url: audioURL as string });
      await sendInterviewData(audioBlob as Blob);
      router.push("/interview-result");
    } else {
      setQuestionNum((prev) => prev + 1);
      if (audioBlob && audioURL) addResponse({ blob: audioBlob, url: audioURL });
    }
  };
  return (
    <div className="flex flex-col gap-3 w-full h-[30rem]">
      <QuestionBox question={question} qNum={qNum} />
      <AnswerBox isRecording={isRecording} start={start} stop={stop} audioURL={audioURL} />
      <div className="flex flex-row items-center justify-between">
        {/* <Button
          label={"답변 초기화"}
          clickHandler={answerResetBtnHandler}
          border="solid black 1px"
        /> */}
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
