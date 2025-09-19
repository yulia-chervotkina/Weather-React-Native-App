import React, { useEffect } from 'react';
import { View } from 'react-native';

import Text from '@components/Text/PlainText.jsx';
import useLocationStore from '@stores/locationStore.js';
import useWeatherStore from '@stores/weatherStore.js';

import FutureDaysForecast from './FutureDaysForecast/FutureDaysForecast.jsx';
import HourlyForecast from './HourlyForecast/HourlyForecast.jsx';

const Forecast = () => {
    const { forecast, fetchForecast, error, loading } = useWeatherStore();
    const { currentCity, searchedCity } = useLocationStore();
    const activeCity = searchedCity || currentCity;
    useEffect(() => {
        if (activeCity) {
            fetchForecast(activeCity);
        }
    }, [activeCity, fetchForecast]);

    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!forecast) return <Text>Couldn't fetch data</Text>;

    return (
        <View>
            <HourlyForecast />
            <FutureDaysForecast />
        </View>
    );
};

export default Forecast;
