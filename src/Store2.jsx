import { create } from 'zustand'

const d = new Date()
let den = d.getDate()
let mesycDate = d.getMonth() + 1

export const useData2 = create((set) => ({

  dataText2: `${den + '.' + mesycDate}`,
//   setDataText: (item) => set((state) => ({ dataText: item })),
  
}))