import { create } from 'zustand';

const useSavedLocationsStore = create(set => ({
  savedLocations: [],
  setSavedLocations: location =>
    set(state => ({ savedLocations: [...state.savedLocations, location] })),
}));

export default useSavedLocationsStore;
