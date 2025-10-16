import { API_KEY, BASE_URL } from '@env';

const searchLocation = async location => {
    const response = await fetch(
        `${BASE_URL}/search.json?key=${API_KEY}&q=${location}`,
    );
    if (!response.ok) {
        throw new Error("Couldn't find the location");
    }
    return response.json();
};

const fetchWeather = async ({ city, latitude, longitude }) => {
    let q = city;
    if (!q) {
        q = `${latitude},${longitude}`;
    }
    const response = await fetch(
        `${BASE_URL}/current.json?key=${API_KEY}&q=${q}`,
    );
    if (!response.ok) {
        throw new Error("Couldn't load weather data");
    }
    return response.json();
};

const fetchForecast = async ({ city, latitude, longitude }, days = 10) => {
    let q = city;
    if (!q) {
        q = `${latitude},${longitude}`;
    }
    const response = await fetch(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&days=${days}`,
    );
    if (!response.ok) {
        throw new Error("Couldn't load weather data");
    }
    return response.json();
};

export { searchLocation, fetchWeather, fetchForecast };
