import { create } from 'zustand';

import { Location } from '@/types/types';

import { searchLocation } from '../api/weather';

type AutocompleteStore = {
    result: Location[];
    loading: boolean;
    error: unknown;
    locationIsSelected: boolean;
    setLocationIsSelected: (isLocationSelected: boolean) => void;
    searchLocation: (arg0: string) => Promise<void>;
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

    searchLocation: async location => {
        if (!location) set({ result: [] });
        set({ loading: true, error: null });
        try {
            const data = await searchLocation(location);
            set({ result: data, loading: false });
        } catch (error: unknown) {
            set({ error: error, loading: false, result: [] });
        }
    },
}));

export default useAutocompleteStore;
