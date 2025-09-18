import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles.js';
import LinearGradient from 'react-native-linear-gradient';
import FauxButton from '../components/FauxButton/FauxButton.jsx';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import Forecast from '../components/Forecast/Forecast.jsx';
// массив сюда
const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => { // тут
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
