import React, { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '@assets/colors.js';

import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import FauxButton from '../components/FauxButton/FauxButton.jsx';
import Forecast from '../components/Forecast/Forecast.jsx';
import styles from './styles.js';

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
        <LinearGradient colors={colors.gradient} style={styles.linearGradient}>
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
