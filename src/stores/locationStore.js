import { create } from 'zustand';

const useLocationStore = create()(set => ({
    location: null,
    searchedLocation: null,
    setLocation: location => set({ location }),
    setSearchedLocation: searchedLocation => set({ searchedLocation }),
}));
export default useLocationStore;
