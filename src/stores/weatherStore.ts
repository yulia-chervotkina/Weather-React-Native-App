import { create } from 'zustand';

import type { ForecastData } from '@/types/types';

import type { FetchData } from '../api/types';
import { fetchForecast } from '../api/weather';

type WeatherStore = {
    forecast: ForecastData | null;
    loading: boolean;
    error: Error | null;
    fetchForecast: (arg0: FetchData) => Promise<void>;
};

const useWeatherStore = create<WeatherStore>()(set => ({
    forecast: null,
    loading: false,
    error: null,

    fetchForecast: async city => {
        set({ loading: true, error: null });
        try {
            const data = await fetchForecast(city);
            set({ forecast: data, loading: false });
        } catch (error) {
            if (error instanceof Error) set({ error: error, loading: false });
        }
    },
}));

export default useWeatherStore;
