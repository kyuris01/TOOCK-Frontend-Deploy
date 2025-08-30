import Button from "@/app/ui/Button";
import React, { useState } from "react";
import MicOn from "@/assets/micOn.svg";
import MicOff from "@/assets/micOff.svg";

const AnswerBox = () => {
  const [isRecord, setIsRecord] = useState<boolean>(false);
  const recordBtnClickHandler = () => {};
  return (
    <div className="flex flex-col justify-between w-full h-[10rem] bg-slate-400 rounded-md p-3">
      <div>
        <div className="text-xl font-semibold">답변</div>
        <div>마이크 버튼을 눌러 답변을 시작하세요</div>
      </div>
      <textarea placeholder="여기에 답변이 표시됩니다..." name="" id=""></textarea>
      <div className="flex justify-center items-center">
        <Button
          label={"녹음 시작"}
          clickHandler={recordBtnClickHandler}
          icon={
            isRecord ? (
              <MicOff width="0.8rem" height="0.8rem" />
            ) : (
              <MicOn width="0.8rem" height="0.8rem" />
            )
          }
          bgColor={isRecord ? "red" : "#3b82f6"}
          width="7rem"
        />
      </div>
    </div>
  );
};

export default AnswerBox;
