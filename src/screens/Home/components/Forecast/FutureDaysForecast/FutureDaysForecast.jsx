import { useCallback } from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import Text from '@/components/Text/PlainText.tsx';
import { daysOfWeek } from '@/constants/calendarData';
import useWeatherStore from '@/stores/weatherStore';

import styles from './styles';

const keyExtractor = item => item.date;

const FutureDaysForecast = () => {
    const { forecast } = useWeatherStore();

    const weatherDataArray = forecast.forecast.forecastday;

    const renderItem = useCallback(({ item }) => {
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
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={weatherDataArray}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                scrollEnabled={false}
            />
        </SafeAreaView>
    );
};

export default FutureDaysForecast;
