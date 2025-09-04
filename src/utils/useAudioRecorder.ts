"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const start = useCallback(async () => {
    // 지원 체크
    if (
      typeof window === "undefined" ||
      !navigator?.mediaDevices?.getUserMedia ||
      typeof window.MediaRecorder === "undefined"
    ) {
      alert("이 브라우저/환경은 녹음을 지원하지 않습니다.");
      return;
    }

    try {
      // 기존 결과 URL 정리
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
        setAudioURL(null);
      }
      setAudioBlob(null);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const prefer = (window as any).MediaRecorder?.isTypeSupported?.("audio/webm;codecs=opus")
        ? { mimeType: "audio/webm;codecs=opus" }
        : undefined;

      const rec = new MediaRecorder(stream, prefer);
      recorderRef.current = rec;
      chunksRef.current = [];

      rec.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };

      rec.onstop = () => {
        const type = rec.mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioURL(url);

        // 마이크 트랙 해제
        streamRef.current?.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };

      rec.start();
      setIsRecording(true);
    } catch (e: any) {
      if (e?.name === "NotFoundError" || e?.name === "DevicesNotFoundError") {
        alert("마이크를 찾을 수 없습니다. 장치/권한을 확인해주세요.");
      } else if (e?.name === "NotAllowedError" || e?.name === "SecurityError") {
        alert("마이크 권한이 차단되어 있습니다. 브라우저 권한을 허용하세요.");
      } else {
        alert("녹음을 시작할 수 없습니다.");
      }
    }
  }, [audioURL]);

  const stop = useCallback(() => {
    const r = recorderRef.current;
    if (!r) return;
    if (r.state !== "inactive") r.stop();
    setIsRecording(false);
  }, []);

  const togglePause = useCallback(() => {
    const r = recorderRef.current;
    if (!r) return;
    if (r.state === "recording") {
      r.pause();
      setIsRecording(false);
    } else if (r.state === "paused") {
      r.resume();
      setIsRecording(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      try {
        if (recorderRef.current && recorderRef.current.state !== "inactive")
          recorderRef.current.stop();
      } catch {}
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (audioURL) URL.revokeObjectURL(audioURL);
    };
  }, [audioURL]);

  const reset = useCallback(() => {
    try {
      const r = recorderRef.current;
      // stop 시 onstop에서 Blob을 만들지 않도록 콜백 제거
      if (r && r.state !== "inactive") {
        r.onstop = null as any;
        r.stop();
      }
    } catch {}

    // 스트림/레코더/버퍼 정리
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    recorderRef.current = null;
    chunksRef.current = [];

    // URL/상태 정리
    if (audioURL) URL.revokeObjectURL(audioURL);
    setAudioURL(null);
    setAudioBlob(null);
    setIsRecording(false);
  }, [audioURL]);

  // 언마운트/리로드 시 정리
  useEffect(() => {
    return () => {
      try {
        if (recorderRef.current && recorderRef.current.state !== "inactive") {
          recorderRef.current.stop();
        }
      } catch {}
      streamRef.current?.getTracks().forEach((t) => t.stop());
      if (audioURL) URL.revokeObjectURL(audioURL);
    };
  }, [audioURL]);

  return { isRecording, start, stop, reset, togglePause, audioURL, audioBlob } as const;
}
