import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSavedLocationsStore = create()(
  persist(
    (set, get) => (
      {
        savedLocations: [],

        addLocation: location => {
          const current = get().savedLocations;
          if (!current.includes(location)) {
            set({ savedLocations: [...current, location] });
          }
        },

        removeLocation: location => {
          set(state => ({
            savedLocations: state.savedLocations.filter(e => e !== location),
          }));
        },
      },
      {
        name: 'savedLocations',
        storage: createJSONStorage(() => AsyncStorage),
      }
    ),
  ),
);

export default useSavedLocationsStore;
