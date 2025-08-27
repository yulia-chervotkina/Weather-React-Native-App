import { create } from 'zustand';
import { searchLocation } from '../api/config.js';

const useLocationStore = create(set => ({
  result: [],
  loading: false,
  error: null,

  searchLocation: async location => {
    if (!location) return set({ result: [] });
    set({ loading: true, error: null });
    try {
      const data = await searchLocation(location);
      console.log('API response for query:', location, data);
      set({ result: Array.isArray(data) ? data : [], loading: false });
    } catch (error) {
      console.log('Autocomplete error:', error.message);
      set({ error: error.message, loading: false, result: [] });
    }
  },
}));

export default useLocationStore;
