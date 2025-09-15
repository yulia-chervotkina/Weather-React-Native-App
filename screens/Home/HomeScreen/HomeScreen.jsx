import React, {useState} from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import styles from './styles.js';
import LinearGradient from 'react-native-linear-gradient';
import FauxButton from '../components/FauxButton/FauxButton.jsx'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather.jsx';
import Forecast from '../components/Forecast/Forecast.jsx'

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    }, 2000)
  }, []);

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
        <FauxButton />
        <CurrentWeather />
        <Forecast />
      </ScrollView>
    </LinearGradient>
  )
};

export default HomeScreen;
