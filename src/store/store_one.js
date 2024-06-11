import { create } from "zustand";

export const useStore= create((set)=>({
  number: 0,
  incriments: ()=> set((state)=>({number: state.number + 1})),
  decreiment: ()=> set((state)=>({number: state.number -1 })),
  remove: ()=>set({number:0})
}))