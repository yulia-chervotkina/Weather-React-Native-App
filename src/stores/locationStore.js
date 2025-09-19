import { create } from 'zustand';

const useLocationStore = create()(set => ({
    currentCity: null,
    searchedCity: null,
    setCurrentCity: newCity => set({ currentCity: newCity }),
    setSearchedCity: newCity => set({ searchedCity: newCity }),
}));
export default useLocationStore;
