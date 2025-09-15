import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { Row, Col, Grid } from "react-native-easy-grid";
import Text from '../../../../components/Text/PlainText.jsx';
import styles from './styles.js';
import useWeatherStore from '../../../../stores/weatherStore.js';
import useLocationStore from'../../../../stores/locationStore.js';
import Percip from '../../../../assets/icons/percip.svg';
import Humidity from '../../../../assets/icons/humidity.svg';
import UV from '../../../../assets/icons/uv.svg';
import Wind from '../../../../assets/icons/wind.svg';

const CurrentWeather = () => {
  const {weather, fetchWeather, error, loading} = useWeatherStore();
  const { city } = useLocationStore();
  
  const now = new Date();
  const day = now.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[now.getMonth()];

  useEffect(() => {
    fetchWeather(city)
  }, [city, fetchWeather]);

  if (loading) return <Text>Loading ...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>;

  const {condition, temp_c} = weather.current;
  const iconURL = 'https:' + weather.current.condition.icon;
  const { uv, humidity, precip_mm, wind_kph } = weather.current;
  
  return (
    <View style={styles.container}>
      <Text style={styles.day}>Today, {day} {month}</Text>
      <Image 
        source={{uri: iconURL}} 
        style={styles.icon}/>
      <Text style={styles.temperature}>{Math.round(temp_c)}°C</Text>
      <Text style={styles.condition}>{condition.text}</Text>
      <Grid style={styles.gridContainer}>
        <Col>
          <Row>
            <UV />
            <Text style={styles.text}>UV  |  {Math.round(uv)}</Text>
          </Row>
          <Row>
            <Humidity />
            <Text style={styles.text}>Hum  |  {Math.round(humidity)} %</Text>
          </Row>
          <Row>
            <Percip />
            <Text style={styles.text}>Percip  |  {Math.round(precip_mm)} mm</Text>
          </Row>
          <Row>
            <Wind />
            <Text style={styles.text}>Wind  |  {Math.round(wind_kph)} km/h</Text>
          </Row>
        </Col>
      </Grid>
    </View>
  )
};
export default CurrentWeather;