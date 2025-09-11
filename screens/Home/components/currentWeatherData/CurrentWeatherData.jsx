import React from 'react';
import Text from '../../../../components/Text/PlainText.jsx';
import { Row, Col, Grid } from "react-native-easy-grid";
import styles from './styles';
import useWeatherStore from '../../../../stores/weatherStore.js';
import Percip from '../../../../assets/icons/percip.svg';
import Humidity from '../../../../assets/icons/humidity.svg';
import UV from '../../../../assets/icons/uv.svg';
import Wind from '../../../../assets/icons/wind.svg';

const CurrentWeatherData = () => {
  const { weather, error, loading } = useWeatherStore();

  if (loading) return <Text>Loading ...</Text>
  if (error) return <Text>Error: {error}</Text>;
  if (!weather) return <Text>Couldn't fetch data</Text>;

  const { uv, humidity, precip_mm, wind_kph } = weather.current;

    return (
      <Grid style={styles.container}>
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
  )
};

export default CurrentWeatherData;