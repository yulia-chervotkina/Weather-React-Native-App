import { ForecastData } from '@/types/types';

const getNext24HoursForecast = (forecast: ForecastData | null) => {
    if (!forecast || !forecast.forecast) return [];
    const hourlyDataToday = forecast.forecast.forecastday[0].hour;
    const hourlyDataTomorrow = forecast.forecast.forecastday[1].hour || [];
    const now = new Date(forecast.current.last_updated);

    const currentIndex = hourlyDataToday.findIndex(hourEntry => {
        const forecastTime = new Date(hourEntry.time);
        return forecastTime.getTime() >= now.getTime();
    });

    const slicedToday = hourlyDataToday.slice(currentIndex, currentIndex + 24);

    if (slicedToday.length === 24) return slicedToday;
    const remaining = 24 - slicedToday.length;
    const slicedTomorrow = hourlyDataTomorrow.slice(0, remaining);

    return [...slicedToday, ...slicedTomorrow];
};

export default getNext24HoursForecast;
