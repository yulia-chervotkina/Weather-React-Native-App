import { useCallback, useMemo } from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import Text from '@components/Text/PlainText.jsx';
import { daysOfWeek } from '@constants/calendarData.js';
import useWeatherStore from '@stores/weatherStore.js';

import styles from './styles.js';

const FutureDaysForecast = () => {
    const { forecast } = useWeatherStore();

    const weatherDataArray = useMemo(
        () => forecast.forecast.forecastday,
        [forecast.forecast.forecastday],
    );

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
                keyExtractor={item => item.date}
                scrollEnabled={false}
            />
        </SafeAreaView>
    );
};

export default FutureDaysForecast;
