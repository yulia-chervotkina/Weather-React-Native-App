import { View } from 'react-native';

import DataStatus from '@/components/DataStatus.jsx';
import useWeatherStore from '@/stores/weatherStore.js';

import FutureDaysForecast from './FutureDaysForecast/FutureDaysForecast.jsx';
import HourlyForecast from './HourlyForecast/HourlyForecast.jsx';

const Forecast = () => {
    const { forecast, error, loading } = useWeatherStore();

    return (
        <DataStatus loading={loading} error={error} data={forecast}>
            {data => {
                if (data)
                    return (
                        <View>
                            <HourlyForecast />
                            <FutureDaysForecast />
                        </View>
                    );
            }}
        </DataStatus>
    );
};

export default Forecast;
