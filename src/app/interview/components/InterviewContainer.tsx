"use client";

import React from "react";
import QuestionBox from "./QuestionBox";
import AnswerBox from "./AnswerBox";
import Button from "@/app/ui/Button";
import { useAudioRecorder } from "@/utils/useAudioRecorder";
import { useInterviewDataStore } from "@/stores/interviewData.store";
import { useRouter } from "next/navigation";
import { sendInterviewData } from "@/app/api/interview/sendInterviewData";
import { useMutation } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";

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
  const { isRecording, start, stop, reset, audioURL, audioBlob } = useAudioRecorder();
  const addResponse = useInterviewDataStore((s) => s.addResponse);
  const mutation = useMutation({
    mutationFn: (data: Blob) => sendInterviewData(data),
  });

  const nextBtnHandler = async () => {
    if (++qNum === totalQNum) {
      addResponse({ blob: audioBlob as Blob, url: audioURL as string });
      // await sendInterviewData(audioBlob as Blob);
      mutation.mutate(audioBlob as Blob, {
        onSuccess: () => router.push("/interview-result"),
      });
    } else {
      setQuestionNum((prev) => prev + 1);
      if (audioBlob && audioURL) addResponse({ blob: audioBlob, url: audioURL });
      reset();
    }
  };
  return (
    <>
      {mutation.isPending ? (
        <div className="flex items-center justify-center w-full h-[30rem]">
          <MoonLoader />
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full h-[30rem]">
          <QuestionBox question={question} qNum={qNum} />
          <AnswerBox
            key={`q-${qNum}`}
            isRecording={isRecording}
            start={start}
            stop={stop}
            audioURL={audioURL}
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <Button
                label={"건너뛰기"}
                clickHandler={() => setQuestionNum((prev) => prev + 1)}
                border="solid var(--color-blue-950) 1px"
                color="var(--color-blue-950)"
              />
              <Button
                label={"다음 질문"}
                clickHandler={nextBtnHandler}
                bgColor="var(--color-blue-950)"
                color="white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InterviewContainer;
