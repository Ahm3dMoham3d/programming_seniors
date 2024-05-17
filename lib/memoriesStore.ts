import { create } from "zustand";
interface memories {
  id: number;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
export const useMemoryStore = create((set) => ({
  memories: <memories[]>[],
  setData: (data: memories[]) => set(() => ({ memories: data })),
}));
