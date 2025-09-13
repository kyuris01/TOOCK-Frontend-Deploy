import Button from "@/app/ui/Button";
import React from "react";
import MicOn from "@/assets/micOn.svg";
import MicOff from "@/assets/micOff.svg";
import PuffLoader from "react-spinners/PuffLoader";

interface Props {
  isRecording: boolean;
  start: () => Promise<void>;
  stop: () => void;
  audioURL: string | null;
}

const AnswerBox = ({ isRecording, start, stop, audioURL }: Props) => {
  // const { supported, text, setText, start: sttStart, stop: sttStop } = useSpeechToText("ko-KR");

  const recordBtnClickHandler = () => {
    if (isRecording) {
      stop();
    } else {
      start();
    }
  };
  return (
    <div className="flex flex-col justify-between gap-2 w-full h-[15rem] bg-slate-400 rounded-md p-3">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="text-xl font-semibold">답변</div>
          <div className="hidden sm:block text-sm">마이크 버튼을 눌러 답변을 시작하세요</div>
        </div>
        <Button
          label={isRecording ? "녹음 중지" : "녹음 시작"}
          clickHandler={recordBtnClickHandler}
          icon={
            isRecording ? (
              <MicOff width="0.8rem" height="0.8rem" />
            ) : (
              <MicOn width="0.8rem" height="0.8rem" />
            )
          }
          bgColor={isRecording ? "#d43628" : "#3b82f6"}
          width="7rem"
        />
      </div>
      <div className="flex items-center justify-center flex-1 w-full rounded-sm bg-slate-300 p-2">
        <PuffLoader color="var(--color-blue-950)" loading={isRecording} />
      </div>
      <audio controls src={audioURL as string} className="w-full" />
    </div>
  );
};

export default AnswerBox;
