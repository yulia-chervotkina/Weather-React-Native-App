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
    const { weather, fetchWeather, fetchForecast, loading } = useWeatherStore();
    const { location, searchedLocation, setLocation } = useLocationStore();

    useEffect(() => {
        if (!location)
            // TODO убрать в getUserLocation парсинг: then(setLocation) 
            getUserLocation().then(loc => {
                const { latitude, longitude } = loc;
                setLocation({ latitude, longitude });
            });
    });

    const activeLocation = searchedLocation || location;
    console.log("HomeScreen data: ", typeof activeLocation)

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
