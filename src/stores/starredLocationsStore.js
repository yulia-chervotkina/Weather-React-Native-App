import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const storage = {
    getItem: async key => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (!value) return null;
            const data = JSON.parse(value);
            return {
                ...data,
                state: {
                    ...data.state,
                    starredLocations: new Set(data.state.starredLocations),
                },
            };
        } catch (e) {
            console.error('Error getting data: ', e.message);
        }
    },
    setItem: async (key, value) => {
        try {
            const str = JSON.stringify({
                ...value,
                state: {
                    ...value.state,
                    starredLocations: Array.from(value.state.starredLocations),
                },
            });

            await AsyncStorage.setItem(key, str);
        } catch (e) {
            console.error('Error setting data: ', e.message);
        }
    },
    removeItem: async key => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            console.error('Error removing data: ', e.message);
        }
    },
};

const initialState = {
    starredLocations: new Set(),
};

const useStarredLocationsStore = create(
    persist(
        (set, get) => ({
            ...initialState,

            addLocation: location => {
                const current = new Set(get().starredLocations);
                current.add(location);
                set({ starredLocations: current });
            },

            removeLocation: location => {
                const current = new Set(get().starredLocations);
                current.delete(location);
                set({ starredLocations: current });
            },
        }),
        {
            name: 'starredLocations',
            storage,
        },
    ),
);

export default useStarredLocationsStore;
