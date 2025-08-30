"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface Props {
  question: string;
  qNum: number;
}

export const useBrowserTTS = ({ question, qNum }: Props) => {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const cancel = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  const speakQuestion = useCallback(() => {
    if (!isSupported || !question) return;
    const synth = window.speechSynthesis;
    // 이전 재생 취소
    synth.cancel();

    const utt = new SpeechSynthesisUtterance(question);
    utt.lang = "ko-KR";
    utt.rate = 1;
    utt.pitch = 1;

    const voices = synth.getVoices();
    const ko = voices.find((v) => v.lang.startsWith("ko"));
    if (ko) utt.voice = ko;

    utt.onstart = () => setIsSpeaking(true);
    utt.onend = () => setIsSpeaking(false);
    utt.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utt;
    synth.speak(utt);
  }, [isSupported, question]);

  // 자동 재생
  useEffect(() => {
    if (!isSupported) return;
    const synth = window.speechSynthesis;

    const run = () => speakQuestion();

    if (synth.getVoices().length === 0) {
      const handle = () => {
        run();
        synth.removeEventListener("voiceschanged", handle);
      };
      synth.addEventListener("voiceschanged", handle);
      setTimeout(() => {
        if (utteranceRef.current == null) run();
      }, 700);
    } else {
      run();
    }

    return () => {
      synth.cancel();
    };
    // 기본 트리거: question, qNum
  }, [speakQuestion, isSupported]);

  return {
    speakQuestion,
    cancel,
    isSpeaking,
    isSupported,
  };
};
