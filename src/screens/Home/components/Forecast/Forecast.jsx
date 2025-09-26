import { View } from 'react-native';

import DataStatus from '@components/DataStatus.jsx';
import Text from '@components/Text/PlainText.jsx';
import useWeatherStore from '@stores/weatherStore.js';

import FutureDaysForecast from './FutureDaysForecast/FutureDaysForecast.jsx';
import HourlyForecast from './HourlyForecast/HourlyForecast.jsx';

const Forecast = () => {
    const { forecast, error, loading } = useWeatherStore();

    if (!forecast) return <Text>Couldn't fetch data</Text>;

    return (
        <View>
            <DataStatus loading={loading} error={error} />
            <HourlyForecast />
            <FutureDaysForecast />
        </View>
    );
};

export default Forecast;
