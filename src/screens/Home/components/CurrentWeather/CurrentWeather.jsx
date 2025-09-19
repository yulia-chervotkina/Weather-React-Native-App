import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import GetLocation from 'react-native-get-location';

import Humidity from '@assets/icons/humidity.svg';
import Percip from '@assets/icons/percip.svg';
import UV from '@assets/icons/uv.svg';
import Wind from '@assets/icons/wind.svg';
import Text from '@components/Text/PlainText.jsx';
import useLocationStore from '@stores/locationStore.js';
import useWeatherStore from '@stores/weatherStore.js';

import styles from './styles.js';

const CurrentWeather = () => {
    const { weather, fetchWeather, error, loading } = useWeatherStore();
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

    useEffect(() => {
        if (searchedCity) {
            fetchWeather(searchedCity);
        }
    }, [fetchWeather, searchedCity]);

    const now = new Date();
    const day = now.getDate();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const month = months[now.getMonth()];

    if (loading) return <Text>Loading ...</Text>;
    if (error) return <Text>Error: {error}</Text>;
    if (!weather) return <Text>Couldn't fetch data</Text>;

    const { condition, temp_c } = weather.current;
    const iconURL = 'https:' + weather.current.condition.icon;
    const { uv, humidity, precip_mm, wind_kph } = weather.current;

    return (
        <View style={styles.container}>
            <Text style={styles.day}>
                Today, {day} {month}
            </Text>
            <Image source={{ uri: iconURL }} style={styles.icon} />
            <Text style={styles.temperature}>{Math.round(temp_c)}°C</Text>
            <Text style={styles.condition}>{condition.text}</Text>
            <Grid style={styles.gridContainer}>
                <Col>
                    <Row>
                        <UV />
                        <Text style={styles.text}>UV | {Math.round(uv)}</Text>
                    </Row>
                    <Row>
                        <Humidity />
                        <Text style={styles.text}>
                            Hum | {Math.round(humidity)} %
                        </Text>
                    </Row>
                    <Row>
                        <Percip />
                        <Text style={styles.text}>
                            Percip | {Math.round(precip_mm)} mm
                        </Text>
                    </Row>
                    <Row>
                        <Wind />
                        <Text style={styles.text}>
                            Wind | {Math.round(wind_kph)} km/h
                        </Text>
                    </Row>
                </Col>
            </Grid>
        </View>
    );
};
export default CurrentWeather;
