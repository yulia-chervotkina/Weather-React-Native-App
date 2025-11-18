import { create } from 'zustand';

import type { Coordinates, SearchedLocation } from '@/types/types';

type LocationStore = {
    location?: Coordinates;
    searchedLocation?: SearchedLocation;
    setLocation: (location: Coordinates) => void;
    setSearchedLocation: (searchedLocation: SearchedLocation) => void;
};

const useLocationStore = create<LocationStore>()(set => ({
    location: undefined,
    searchedLocation: undefined,
    setLocation: location => set({ location }),
    setSearchedLocation: searchedLocation => set({ searchedLocation }),
}));
export default useLocationStore;
