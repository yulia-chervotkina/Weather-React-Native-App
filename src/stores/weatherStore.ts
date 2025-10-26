import { create } from 'zustand';

import { Forecast, Weather } from '@/types/types';

import { FetchData } from '../api/types';
import { fetchForecast, fetchWeather } from '../api/weather';

type WeatherStore = {
    weather: Weather | null;
    forecast: Forecast | null;
    loading: boolean;
    error: unknown;
    fetchWeather: (arg0: FetchData) => Promise<void>;
    fetchForecast: (arg0: FetchData) => Promise<void>;
};

const useWeatherStore = create<WeatherStore>()(set => ({
    weather: null,
    forecast: null,
    loading: false,
    error: null,

    fetchWeather: async city => {
        console.log('Store fetching city: ', city);
        set({ loading: true, error: null });
        try {
            const data = await fetchWeather(city);
            set({ weather: data, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
        }
    },

    fetchForecast: async city => {
        set({ loading: true, error: null });
        try {
            const data = await fetchForecast(city);
            set({ forecast: data, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
        }
    },
}));

export default useWeatherStore;
