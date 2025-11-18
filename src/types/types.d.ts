export type Coordinates = {
    latitude: number;
    longitude: number;
    city?: undefined;
};

export type Location = {
    name: string;
    country: string;
};

export type SearchedLocation = {
    latitude?: undefined;
    longitude?: undefined;
    city: string;
};

export type WeatherCondition = {
    text: string;
    icon: string;
};

export type CurrentWeatherData = {
    last_updated: string;
    temp_c: number;
    condition: WeatherCondition;
    wind_kph: number;
    precip_mm: number;
    humidity: number;
    uv: number;
};

export type Weather = {
    location: { name: string; country?: string };
    current: CurrentWeatherData;
};

export type Hour = {
    time: string;
    temp_c: number;
    condition: WeatherCondition;
    wind_kph: number;
    precip_mm: number;
    humidity: number;
    uv: number;
};

export type Day = {
    maxtemp_c: number;
    mintemp_c: number;
    condition: WeatherCondition;
};

export type ForecastDay = {
    date: string;
    day: Day;
    hour: Hour[];
};

export type Forecast = {
    forecastday: ForecastDay[];
};

export type ForecastData = {
    location: Location;
    current: CurrentWeatherData;
    forecast: Forecast;
};
