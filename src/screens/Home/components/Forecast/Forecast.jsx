import { View } from 'react-native';

import Text from '@components/Text/PlainText.jsx';
import useWeatherStore from '@stores/weatherStore.js';

import FutureDaysForecast from './FutureDaysForecast/FutureDaysForecast.jsx';
import HourlyForecast from './HourlyForecast/HourlyForecast.jsx';

const Forecast = () => {
    const { forecast, error, loading } = useWeatherStore();

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
