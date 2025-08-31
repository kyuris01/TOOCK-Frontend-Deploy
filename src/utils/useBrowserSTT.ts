"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export function useSpeechToText(lang: string = "ko-KR") {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [text, setText] = useState("");
  const recRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SR: typeof window.SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    setSupported(true);
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = false;
    rec.lang = lang;
    rec.onresult = (e: SpeechRecognitionEvent) => {
      //   let finalText = "";
      //   for (let i = e.resultIndex; i < e.results.length; i++) {
      //     finalText += e.results[i][0].transcript;
      //   }
      //   setText((prev) => (prev + " " + finalText).trim());
      const result = e.results[e.resultIndex];
      const transcript = result?.[0]?.transcript ?? "";
      setText((prev) => (prev ? prev + " " : "") + transcript.trim());
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
  }, [lang]);

  const start = useCallback(() => {
    if (!recRef.current) return;
    setText("");
    recRef.current.start();
    setListening(true);
  }, []);

  const stop = useCallback(() => {
    recRef.current?.stop();
  }, []);

  return { supported, listening, text, setText, start, stop } as const;
}
