import { useCallback } from 'react';
import { FlatList, Image, ListRenderItem, SafeAreaView } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

import DataStatus from '@/components/DataStatus';
import Text from '@/components/Text/PlainText.tsx';
import { daysOfWeek } from '@/constants/calendarData';
import useWeatherStore from '@/stores/weatherStore';
import type { ForecastDay } from '@/types/types';

import styles from './styles';

const keyExtractor = (item: ForecastDay) => item.date;

const FutureDaysForecast = () => {
    const { loading, error, forecast } = useWeatherStore();

    const renderItem: ListRenderItem<ForecastDay> = useCallback(({ item }) => {
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
            <DataStatus loading={loading} error={error} data={forecast}>
                {data => (
                    <FlatList
                        data={data.forecast.forecastday}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        scrollEnabled={false}
                    />
                )}
            </DataStatus>
        </SafeAreaView>
    );
};

export default FutureDaysForecast;
