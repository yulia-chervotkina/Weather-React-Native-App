import { create } from 'zustand';

import { searchLocation } from '../api/weather.js';

const useAutocompleteStore = create(set => ({
    result: [],
    loading: false,
    error: null,
    locationIsSelected: false,

    setLocationIsSelected: boolean => {
        set({ locationIsSelected: boolean });
        if ({ locationIsSelected: false }) set({ result: null });
    },

    searchLocation: async location => {
        if (!location) return set({ result: [] });
        set({ loading: true, error: null });
        try {
            const data = await searchLocation(location);
            set({ result: Array.isArray(data) ? data : [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false, result: [] });
        }
    },
}));

export default useAutocompleteStore;
