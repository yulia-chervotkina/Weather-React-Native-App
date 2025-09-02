import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import useWeatherStore from '../../stores/weatherStore.js';
import useLocationStore from'../../stores/locationStore.js';

const HourlyForecast = () => {
  const {forecast, fetchForecast, error, loading} = useWeatherStore();
  const { city } = useLocationStore();
  
  useEffect(() => {
      fetchForecast(city)
    }, [city, fetchForecast]);

  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  if (!forecast) return <Text>Couldn't fetch data</Text>;

  const getNext24HoursForecast = (forecast) => {
    const hourlyDataToday = forecast.forecast.forecastday[0].hour;
    const hourlyDataTomorrow = forecast.forecast.forecastday[1].hour || [];

    const now = new Date(); 

    const currentIndex = hourlyDataToday.findIndex(hourEntry => {
      const forecastTime = new Date(hourEntry.time.replace(" ", "T"));
      return forecastTime.getTime() >= now.getTime();
    });

    const slicedToday = hourlyDataToday.slice(currentIndex, currentIndex+24);

    if (slicedToday.length === 24) return slicedToday;
    const remaining = 24-slicedToday.length;
    const slicedTomorrow = hourlyDataTomorrow.slice(0, remaining);

    return [...slicedToday, ...slicedTomorrow];
  };

  const next24Hours = getNext24HoursForecast(forecast);

  const renderItem = ({ item }) => {
    return(
      <View style={styles.currentWeatherDataItem}>
        <Text>{Math.round(item.temp_c)}</Text>
        <Image 
          source={{uri: 'https:' + item.condition.icon}} 
          style={{ width: 32, height: 32 }}
        />
        <Text>{new Date(item.time).getHours()}:00</Text>
      </View>
    )
  }

  return (
      <FlatList
        data={next24Hours}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
        horizontal={true}
      />
    )
};

export default HourlyForecast;