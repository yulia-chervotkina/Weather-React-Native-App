import { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import GetLocation from 'react-native-get-location';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@assets/colors.js';
import useLocationStore from '@stores/locationStore.js';
import useWeatherStore from '@stores/weatherStore.js';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import FauxButton from '../components/FauxButton/FauxButton.jsx';
import Forecast from '../components/Forecast/Forecast.jsx';
import styles from './styles.js';

const HomeScreen = () => {
    const { weather, fetchWeather, fetchForecast } = useWeatherStore();
    const { currentCity, searchedCity, setCurrentCity } = useLocationStore();

    useEffect(() => {
        if (!currentCity) {
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 30000,
            })
                .then(async location => {
                    const { latitude, longitude } = location;
                    await fetchWeather(`${latitude},${longitude}`);
                    if (weather) setCurrentCity(weather.location.name);
                })
                .catch(e => {
                    console.warn(e.message);
                });
        }
    }, [fetchWeather, currentCity, setCurrentCity, weather]);

    const activeCity = searchedCity || currentCity;

    useEffect(() => {
        if (activeCity) {
            fetchWeather(activeCity);
            fetchForecast(activeCity);
        }
    }, [activeCity, fetchForecast, fetchWeather]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        fetchWeather(activeCity);
        fetchForecast(activeCity);
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [activeCity, fetchForecast, fetchWeather]);

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
                <FauxButton label={activeCity} />
                <CurrentWeather />
                <Forecast />
            </ScrollView>
        </LinearGradient>
    );
};

export default HomeScreen;
