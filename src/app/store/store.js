

import { create } from 'zustand'
export const useStore = create((set) => ({
    filteredData: [],
    /*loggedUser : null,
     item: {},
    idRecord: '',
    openDialog: false,
    openForm : false,
    openDetail : false,
    setItem: (newItem) => set({ item: newItem }),
    setOpenDialog: (newValue) => set({ openDialog: newValue }),
    setopenForm: (newValue) => set({ openForm: newValue }),
    setopenDetail: (newValue) => set({ openDetail: newValue }),
    setIdRecord: (newIdRecord) => set({ idRecord: newIdRecord }), 
    setLoggedUser : (data) => set ({loggedUser : data})*/
    setFilteredData : (data) => set({filteredData : data}),

}))