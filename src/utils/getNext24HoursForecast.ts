type ForecastData = {
        forecast: {
            forecastday: { hour: { time: string }[] }[];
        };
        current: {
            last_updated: string;
        };
}

const getNext24HoursForecast = ( data: ForecastData) => {
    const hourlyDataToday = data.forecast.forecastday[0].hour;
    const hourlyDataTomorrow = data.forecast.forecastday[1].hour || [];

    const now = new Date(data.current.last_updated);

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
