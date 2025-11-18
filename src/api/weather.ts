import { API_KEY, BASE_URL } from '@env';

import { FetchData } from '@/api/types';
import { ForecastData, Location } from '@/types/types';

const searchLocation = async (location: string) => {
    const response = await fetch(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${location}`,
    );
    if (!response.ok) {
        throw new Error("Couldn't find the location");
    }
    return response.json() as Promise<Location[]>;
};

const fetchForecast = async ({
    city,
    latitude,
    longitude,
}: FetchData): Promise<ForecastData> => {
    let q = city;
    if (!q) q = `${latitude},${longitude}`;

    const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&days=3`,
    );
    if (!response.ok) {
        throw new Error("Couldn't load weather data");
    }
    return response.json() as Promise<ForecastData>;
};

export { searchLocation, fetchForecast };
