import React, {useEffect} from 'react';
import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../../../stores/weatherStore.js';
import useLocationStore from'../../../../stores/locationStore.js';

const TenDayForecast = () => {
  const {forecast, fetchForecast, error, loading} = useWeatherStore();
  const { city } = useLocationStore();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    fetchForecast(city)
  }, [city, fetchForecast]);
  
  if (loading) return <Text>Loading ...</Text>
  if (error) return <Text>Error: {error}</Text>;
  if (!forecast) return <Text>Couldn't fetch data</Text>;
  
  const weatherDataArray = forecast.forecast.forecastday;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.tenDayForecastItem}>
        <Text>{daysOfWeek[new Date(item.date).getDay()]}</Text>
        <Image 
          source={{uri: 'https:' + item.day.condition.icon}} 
          style={{ width: 32, height: 32 }}/>
        <Text>{Math.round(item.day.maxtemp_c)}</Text>
        <Text>{Math.round(item.day.mintemp_c)}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={weatherDataArray}
        renderItem={renderItem}
        keyExtractor={item => item.date}
      />
    </SafeAreaView>
  )
};

export default TenDayForecast;