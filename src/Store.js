import { create } from 'zustand'

export const useData = create((set) => ({
  dataText: '',
  setDataText: (item) => set((state) => ({ dataText: item })),
  dataNumber:'',
  setDataNumber: (item) => set((state) => ({ dataNumber: item })),
  dataNumberMouth:'',
  setDataNumberMouth: (item) => set((state) => ({ dataNumberMouth: item })),
  
}))