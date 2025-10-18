import { useCallback, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@/assets/colors.js';
import useLocationStore from '@/stores/locationStore.js';
import useWeatherStore from '@/stores/weatherStore.js';
import getUserLocation from '@/utils/getUserLocation.js';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import FauxButton from '../components/FauxButton/FauxButton.jsx';
import Forecast from '../components/Forecast/Forecast.jsx';
import styles from './styles.js';

const HomeScreen = () => {
    const { weather, fetchWeather, fetchForecast, loading } = useWeatherStore();
    const { location, searchedLocation, setLocation } = useLocationStore();

    useEffect(() => {
        if (!location)
            getUserLocation().then(loc => {
                const { latitude, longitude } = loc;
                setLocation({ latitude, longitude });
            });
    });

    const activeLocation = searchedLocation || location;

    useEffect(() => {
        if (activeLocation) {
            fetchWeather(activeLocation);
            fetchForecast(activeLocation);
        }
    }, [activeLocation, fetchForecast, fetchWeather]);

    const onRefresh = useCallback(() => {
        fetchWeather(activeLocation);
        fetchForecast(activeLocation);
    }, [activeLocation, fetchForecast, fetchWeather]);

    const isActuallyRefreshing = loading && !weather;

    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={isActuallyRefreshing}
                        onRefresh={onRefresh}
                        colors={colors.topOfGradient}
                        tintColor={colors.border}
                        bounces={!isActuallyRefreshing}
                    />
                }
            >
                {weather ? <FauxButton label={weather.location.name} /> : null}
                <CurrentWeather />
                <Forecast />
            </ScrollView>
        </LinearGradient>
    );
};

export default HomeScreen;
