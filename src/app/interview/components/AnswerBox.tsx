import Button from "@/app/ui/Button";
import React, { useState } from "react";
import MicOn from "@/assets/micOn.svg";
import MicOff from "@/assets/micOff.svg";
import { useAudioRecorder } from "@/utils/useAudioRecorder";
import { useSpeechToText } from "@/utils/useBrowserSTT";

const AnswerBox = () => {
  const { isRecording, start, stop, togglePause, audioURL } = useAudioRecorder();
  const { supported, text, setText, start: sttStart, stop: sttStop } = useSpeechToText("ko-KR");

  const recordBtnClickHandler = () => {
    if (isRecording) {
      stop();
      // sttStop();
    } else {
      start();
      // sttStart();
    }
  };
  return (
    <div className="flex flex-col justify-between gap-2 w-full h-[15rem] bg-slate-400 rounded-md p-3">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="text-xl font-semibold">답변</div>
          <div className="text-sm">마이크 버튼을 눌러 답변을 시작하세요</div>
        </div>
        <Button
          label={"녹음 시작"}
          clickHandler={recordBtnClickHandler}
          icon={
            isRecording ? (
              <MicOff width="0.8rem" height="0.8rem" />
            ) : (
              <MicOn width="0.8rem" height="0.8rem" />
            )
          }
          bgColor={isRecording ? "#d43628" : "#3b82f6"}
          hoverBgColor={isRecording ? "#d43628" : "#3b82f6"}
          width="7rem"
        />
      </div>
      <textarea
        placeholder="여기에 답변이 표시됩니다..."
        value={text}
        className="flex-1 rounded-sm bg-slate-300 p-2"
      ></textarea>
      <audio controls src={audioURL as string} className="w-full" />
    </div>
  );
};

export default AnswerBox;
