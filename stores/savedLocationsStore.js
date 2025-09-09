import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSavedLocationsStore = create()(
  persist(
    set => ({
      savedLocations: [],
      setSavedLocations: location =>
        set(state => ({ savedLocations: [...state.savedLocations, location] })),
    }),
    {
      name: 'savedLocations',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useSavedLocationsStore;
