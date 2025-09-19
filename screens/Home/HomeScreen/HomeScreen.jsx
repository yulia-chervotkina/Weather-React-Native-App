import React, { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import FauxButton from '../components/FauxButton/FauxButton.jsx';
import Forecast from '../components/Forecast/Forecast.jsx';
import styles from './styles.js';

// массив сюда
const HomeScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        // тут
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <LinearGradient
            colors={['#47BFDF', '#4A91FF']} // если это не примитив и я заранее знаю, что там должно быть - убрать вне компонента
            style={styles.linearGradient}
        >
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['grey']}
                        tintColor="black"
                        bounces={!refreshing}
                    />
                }
            >
                <FauxButton />
                <CurrentWeather />
                <Forecast />
            </ScrollView>
        </LinearGradient>
    );
};

export default HomeScreen;
