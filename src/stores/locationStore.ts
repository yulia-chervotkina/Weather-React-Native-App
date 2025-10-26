import { create } from 'zustand';

import { Location, SearchedLocation } from '@/types/types';

type LocationStore = {
    location?: Location;
    searchedLocation?: SearchedLocation;
    setLocation: (location: Location) => void;
    setSearchedLocation: (searchedLocation: SearchedLocation) => void;
};

const useLocationStore = create<LocationStore>()(set => ({
    location: undefined,
    searchedLocation: undefined,
    setLocation: location => set({ location }),
    setSearchedLocation: searchedLocation => set({ searchedLocation }),
}));
export default useLocationStore;
