import { create } from 'zustand';

import { searchLocation } from '../api/weather';

type AutocompleteStore = {
    result: string[];
    loading: boolean;
    error: unknown;
    locationIsSelected: boolean;
    setLocationIsSelected: (isLocationSelected: boolean) => void;
};

const useAutocompleteStore = create<AutocompleteStore>()(set => ({
    result: [],
    loading: false,
    error: null,
    locationIsSelected: false,

    setLocationIsSelected: isLocationSelected => {
        set({ locationIsSelected: isLocationSelected });
        if (!isLocationSelected) set({ result: [] });
    },

    searchLocation: async (location: string): Promise<void> => {
        if (!location) set({ result: [] });
        set({ loading: true, error: null });
        try {
            const data = await searchLocation(location);
            set({ result: Array.isArray(data) ? data : [], loading: false });
        } catch (error: unknown) {
            set({ error: error, loading: false, result: [] });
        }
    },
}));

export default useAutocompleteStore;
