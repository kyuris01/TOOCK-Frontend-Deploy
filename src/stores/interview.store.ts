import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type InterviewState = {
  selectedCompany: string;
  selectedJob: string;
  setSelectedCompany: (value: string) => void;
  setSelectedJob: (value: string) => void;
  reset: () => void;
};

export const useInterviewStore = create<InterviewState>()(
  persist(
    (set) => ({
      selectedCompany: "",
      selectedJob: "",
      setSelectedCompany: (value) => set({ selectedCompany: value }),
      setSelectedJob: (value) => set({ selectedJob: value }),
      reset: () => set({ selectedCompany: "", selectedJob: "" }),
    }),
    {
      name: "interview-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
