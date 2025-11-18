import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@/assets/colors';
import useLocationStore from '@/stores/locationStore';
import useWeatherStore from '@/stores/weatherStore';
import getUserLocation from '@/utils/getUserLocation';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import FauxButton from '../components/FauxButton/FauxButton';
import Forecast from '../components/Forecast/Forecast';
import styles from './styles';

const HomeScreen = () => {
    const { forecast, fetchForecast, loading } = useWeatherStore();
    const { location, searchedLocation, setLocation } = useLocationStore();

    useEffect(() => {
        if (!location) {
            (async () => {
                const coordinates = await getUserLocation();
                setLocation(coordinates);
            })();
        }
    }, [location]);

    const activeLocation = searchedLocation || location;

    useEffect(() => {
        if (activeLocation) {
            fetchForecast(activeLocation);
        }
    }, [activeLocation, fetchForecast]);

    const onRefresh = useCallback(() => {
        if (activeLocation) {
            fetchForecast(activeLocation);
        }
    }, [activeLocation, fetchForecast]);

    const isActuallyRefreshing = loading && !forecast;

    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={isActuallyRefreshing}
                        onRefresh={onRefresh}
                        colors={[colors.topOfGradient]}
                        tintColor={colors.border}
                    />
                }
            >
                {forecast ? (
                    <FauxButton label={forecast.location.name} />
                ) : null}
                <CurrentWeather />
                <Forecast />
            </ScrollView>
        </LinearGradient>
    );
};

export default HomeScreen;
