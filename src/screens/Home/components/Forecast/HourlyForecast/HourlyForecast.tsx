import { useCallback, useMemo } from 'react';
import { FlatList, Image, ListRenderItem, View } from 'react-native';

import Text from '@/components/Text/PlainText';
import useWeatherStore from '@/stores/weatherStore';
import type { Hour } from '@/types/types';
import getNext24HoursForecast from '@/utils/getNext24HoursForecast';

import styles from './styles';

const keyExtractor = (item: Hour) => item.time;

const HourlyForecast = () => {
    const { forecast } = useWeatherStore();

    const next24Hours = useMemo(
        () => getNext24HoursForecast(forecast),
        [forecast],
    );

    const renderItem: ListRenderItem<Hour> = useCallback(({ item }) => {
        return (
            <View style={styles.container}>
                <Text>{Math.round(item.temp_c)} °C</Text>
                <Image
                    source={{ uri: 'https:' + item.condition.icon }}
                    style={styles.image}
                />
                <Text>{new Date(item.time).getHours()}:00</Text>
            </View>
        );
    }, []);

    return (
        <FlatList
            data={next24Hours}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            horizontal={true}
        />
    );
};

export default HourlyForecast;
