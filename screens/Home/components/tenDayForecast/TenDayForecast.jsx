import React, {useEffect} from 'react';
import { Text, Image, FlatList, SafeAreaView } from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
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
      <Grid>
        <Col size={40}><Text style={styles.tenDayForecastItemText}>{daysOfWeek[new Date(item.date).getDay()]}</Text></Col>
        <Col size={20}>
          <Image 
          source={{uri: 'https:' + item.day.condition.icon}} 
          style={styles.image}/>
          </Col>
        <Col size={20}><Text style={styles.tenDayForecastItemText}>{Math.round(item.day.maxtemp_c)} °C</Text></Col>
        <Col size={20}><Text style={styles.tenDayForecastItemText}>{Math.round(item.day.mintemp_c)} °C</Text></Col>
      </Grid>
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={weatherDataArray}
        renderItem={renderItem}
        keyExtractor={item => item.date}
        scrollEnabled={false}
      />
    </SafeAreaView>
  )
};

export default TenDayForecast;