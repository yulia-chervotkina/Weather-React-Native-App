import React, { useEffect } from 'react';
import { View } from 'react-native';
import useWeatherStore from '../../../../stores/weatherStore.js';
import useLocationStore from'../../../../stores/locationStore.js';
import Text from '../../../../components/Text/PlainText.jsx';
import HourlyForecast from './HourlyForecast/HourlyForecast.jsx';
import FutureDaysForecast from './FutureDaysForecast/FutureDaysForecast.jsx';

const Forecast = () => {
    const {forecast, fetchForecast, error, loading} = useWeatherStore();
    const { city } = useLocationStore();

    useEffect(() => {
          fetchForecast(city)
        }, [city, fetchForecast]);

    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!forecast) return <Text>Couldn't fetch data</Text>;

    return(
        <View>
            <HourlyForecast />
            <FutureDaysForecast />
        </View>
    )
}

export default Forecast;