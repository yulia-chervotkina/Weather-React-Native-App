import React from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import Text from '../../../../../components/Text/PlainText.jsx';
import useWeatherStore from '../../../../../stores/weatherStore.js';
import styles from './styles.js';

const FutureDaysForecast = () => {
    const { forecast } = useWeatherStore();
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const weatherDataArray = forecast.forecast.forecastday;

    const renderItem = ({ item }) => {
        return (
            <Grid>
                <Col size={40}>
                    <Text style={styles.text}>
                        {daysOfWeek[new Date(item.date).getDay()]}
                    </Text>
                </Col>
                <Col size={20}>
                    <Image
                        source={{ uri: 'https:' + item.day.condition.icon }}
                        style={styles.image}
                    />
                </Col>
                <Col size={20}>
                    <Text style={styles.text}>
                        {Math.round(item.day.maxtemp_c)} °C
                    </Text>
                </Col>
                <Col size={20}>
                    <Text style={styles.text}>
                        {Math.round(item.day.mintemp_c)} °C
                    </Text>
                </Col>
            </Grid>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={weatherDataArray}
                renderItem={renderItem}
                keyExtractor={item => item.date}
                scrollEnabled={false}
            />
        </SafeAreaView>
    );
};

export default FutureDaysForecast;
