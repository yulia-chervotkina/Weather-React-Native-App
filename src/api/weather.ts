import { API_KEY, BASE_URL } from '@env';

import { FetchData } from '@/api/types';
import { Forecast, Location, Weather } from '@/types/types';

const searchLocation = async (location: string) => {
    const response = await fetch(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${location}`,
    );
    if (!response.ok) {
        throw new Error("Couldn't find the location");
    }
    return response.json() as Promise<Location>;
};

const fetchWeather = async ({
    city,
    latitude,
    longitude,
}: FetchData): Promise<Weather> => {
    let q = city;
    if (!q) q = `${latitude},${longitude}`;

    const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${q}`,
    );
    console.log(response.status);
    if (!response.ok) {
        throw new Error("Couldn't load weather data");
    }
    return response.json() as Promise<Weather>;
};

const fetchForecast = async ({
    city,
    latitude,
    longitude,
}: FetchData): Promise<Forecast> => {
    let q = city;
    if (!q) q = `${latitude},${longitude}`;

    const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&days=3`,
    );
    if (!response.ok) {
        throw new Error("Couldn't load weather data");
    }
    return response.json() as Promise<Forecast>;
};

export { searchLocation, fetchWeather, fetchForecast };
