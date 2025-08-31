interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onaudiostart?: (ev: Event) => void;
  onaudioend?: (ev: Event) => void;
  onend?: (ev: Event) => void;
  onerror?: (ev: Event) => void;
  onnomatch?: (ev: Event) => void;
  onresult?: (ev: SpeechRecognitionEvent) => void;
  onsoundstart?: (ev: Event) => void;
  onsoundend?: (ev: Event) => void;
  onspeechend?: (ev: Event) => void;
  onstart?: (ev: Event) => void;
}

interface Window {
  SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  webkitSpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
}
