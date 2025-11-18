import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
    starredLocations: Set<string>;
};

const zustandAsyncStorage = {
    getItem: async (key: string) => {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {
            return null;
        }
    },
    setItem: async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    },
    removeItem: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {
            if (e instanceof Error) throw new Error(e.message);
        }
    },
};

const initialState: State = {
    starredLocations: new Set(),
};

type Store = {
    addLocation: (location: string) => void;
    removeLocation: (location: string) => void;
    starredLocations: Set<string>;
};

type PersistedState = {
    starredLocations: Array<string>;
};

const useStarredLocationsStore = create<Store>()(
    persist(
        (set, get) => ({
            ...initialState,

            addLocation: (location: string) => {
                const current = new Set(get().starredLocations);
                current.add(location);
                set({ starredLocations: current });
            },

            removeLocation: (location: string) => {
                const current = new Set(get().starredLocations);
                current.delete(location);
                set({ starredLocations: current });
            },
        }),
        {
            name: 'starredLocations',
            storage: createJSONStorage(() => zustandAsyncStorage),

            merge: (persistedState, currentState) => {
                if (!persistedState) return currentState;

                const typedState = persistedState as PersistedState;

                return {
                    ...currentState,
                    ...typedState,
                    starredLocations: new Set(typedState.starredLocations),
                };
            },
            partialize: state => ({
                starredLocations: Array.from(state.starredLocations),
            }),
        },
    ),
);

export default useStarredLocationsStore;
