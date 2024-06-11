import { create } from "zustand";

export const useStore= create((set)=>({
  number: 0,
  increments: ()=> set((state)=>({number: state.number + 1})),
  decrement: ()=> set((state)=>({number: state.number -1 })),
  remove: ()=>set({number:0})
}))