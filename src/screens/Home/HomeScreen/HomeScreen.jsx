import { useCallback, useEffect, useState } from 'react';
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
    const { weather, fetchWeather, fetchForecast } = useWeatherStore();
    const { location, searchedLocation, setLocation } = useLocationStore();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (!location)
            getUserLocation()
                .then(loc => {
                    const { latitude, longitude } = loc;
                    setLocation({ latitude, longitude });
                })
                .catch(e => console.error(e.message));
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
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [activeLocation, fetchForecast, fetchWeather]);

    return (
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={colors.topOfGradient}
                        tintColor={colors.border}
                        bounces={!refreshing}
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
