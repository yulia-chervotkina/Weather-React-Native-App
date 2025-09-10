import React, {useState} from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import HomeScreenButton from './components/Button/Button.jsx'
import CurrentTemperature from './components/currentTemperature/CurrentTemperature';
import HourlyForecast from './components/hourlyForecast/HourlyForecast';
import TenDayForecast from './components/tenDayForecast/TenDayForecast';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    }, 2000)
  }, []);

  const navigation = useNavigation();

  return (
    <LinearGradient useAngle={true} angle={45} colors={['#4A91FF', '#47BFDF']} style={styles.linearGradient}>
      <ScrollView 
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['grey']}
          tintColor='black'
          bounces={!refreshing}
          />
        }
        >
        <HomeScreenButton />
        <CurrentTemperature />
        <HourlyForecast />
        <TenDayForecast />
      </ScrollView>
    </LinearGradient>
  )
};

export default HomeScreen;
