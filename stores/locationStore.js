import { create } from 'zustand';

const useLocationStore = create(set => ({
  city: null,
  setCity: (newCity) => set({ city: newCity }),
}));

export default useLocationStore;
