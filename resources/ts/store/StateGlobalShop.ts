import { create } from 'zustand'


interface Practice {
    bears: number;
    increase: () => void
}


export const useStore = create<Practice>((set) => ({
    bears: 0,
    increase: () => set((state) => ({bears: ++state.bears}))
}))