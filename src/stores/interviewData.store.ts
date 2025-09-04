import { create } from "zustand";

export type InterviewResponse = {
  id: string;
  blob: Blob;
  url: string;
  createdAt: number;
};

type InterviewDataState = {
  responses: InterviewResponse[];
  addResponse: (p: { blob: Blob; url: string }) => void;
  removeResponse: (id: string) => void;
  clearResponses: () => void;
};

export const useInterviewDataStore = create<InterviewDataState>((set, get) => ({
  responses: [],
  addResponse: ({ blob, url }) =>
    set((s) => ({
      responses: [
        ...s.responses,
        { id: Math.random().toString(36).slice(2), blob, url, createdAt: Date.now() },
      ],
    })),
  removeResponse: (id) => {
    const cur = get().responses;
    const target = cur.find((r) => r.id === id);
    if (target) URL.revokeObjectURL(target.url);
    set({ responses: cur.filter((r) => r.id !== id) });
  },
  clearResponses: () => {
    const cur = get().responses;
    cur.forEach((r) => URL.revokeObjectURL(r.url));
    set({ responses: [] });
  },
}));
