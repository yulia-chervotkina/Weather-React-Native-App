import React from 'react';
import { View, Image, FlatList } from 'react-native';
import Text from '../../../../../components/Text/PlainText.jsx';
import styles from './styles.js';
import useWeatherStore from '../../../../../stores/weatherStore.js';

const HourlyForecast = () => {
  const { forecast } = useWeatherStore();

  const getNext24HoursForecast = () => {
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
      <View style={styles.container}>
        <Text>{Math.round(item.temp_c)} °C</Text>
        <Image 
          source={{uri: 'https:' + item.condition.icon}} 
          style={styles.image}
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