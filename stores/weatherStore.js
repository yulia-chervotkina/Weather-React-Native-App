import { create } from 'zustand';
import { fetchWeather, fetchForecast } from '../api/weather.js';

const useWeatherStore = create(set => ({
  weather: null,
  forecast: null,
  loading: false,
  error: null,

  fetchWeather: async city => {
    set({ loading: true, error: null });
    try {
      const data = await fetchWeather(city);
      set({ weather: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchForecast: async city => {
    set({ loading: true, error: null });
    try {
      const data = await fetchForecast(city);
      set({ forecast: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useWeatherStore;
