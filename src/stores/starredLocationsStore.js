import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useStarredLocationsStore = create(
    persist(
        (set, get) => ({
            starredLocations: [],

            addLocation: location => {
                const current = get().starredLocations;
                if (!current.includes(location)) {
                    set({ starredLocations: [...current, location] });
                }
            },

            removeLocation: location => {
                set(state => ({
                    starredLocations: state.starredLocations.filter(
                        e => e !== location,
                    ),
                }));
            },
        }),
        {
            name: 'starredLocations',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);

export default useStarredLocationsStore;
