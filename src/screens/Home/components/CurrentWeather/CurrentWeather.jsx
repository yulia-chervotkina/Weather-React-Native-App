import { Image, View } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import Humidity from '@assets/icons/humidity.svg';
import Percip from '@assets/icons/percip.svg';
import UV from '@assets/icons/uv.svg';
import Wind from '@assets/icons/wind.svg';
import DataStatus from '@components/DataStatus.jsx';
import Text from '@components/Text/PlainText.jsx';
import { months } from '@constants/calendarData.js';
import useWeatherStore from '@stores/weatherStore.js';

import styles from './styles.js';

const CurrentWeather = () => {
    const { weather, error, loading } = useWeatherStore();

    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];

    if (!weather) return <Text>Couldn't fetch data</Text>;

    const { condition, temp_c } = weather.current;
    const iconURL = 'https:' + weather.current.condition.icon;
    const { uv, humidity, precip_mm, wind_kph } = weather.current;

    return (
        <View style={styles.container}>
            <DataStatus
                // weatherData={weather}
                loading={loading}
                error={error}
            />
            <Text style={styles.day}>
                Today, {day} {month}
            </Text>
            <Image source={{ uri: iconURL }} style={styles.icon} />
            <Text style={styles.temperature}>{Math.round(temp_c)}°C</Text>
            <Text style={styles.condition}>{condition.text}</Text>
            <Grid style={styles.gridContainer}>
                <Col>
                    <Row>
                        <UV />
                        <Text style={styles.text}>UV | {Math.round(uv)}</Text>
                    </Row>
                    <Row>
                        <Humidity />
                        <Text style={styles.text}>
                            Hum | {Math.round(humidity)} %
                        </Text>
                    </Row>
                    <Row>
                        <Percip />
                        <Text style={styles.text}>
                            Percip | {Math.round(precip_mm)} mm
                        </Text>
                    </Row>
                    <Row>
                        <Wind />
                        <Text style={styles.text}>
                            Wind | {Math.round(wind_kph)} km/h
                        </Text>
                    </Row>
                </Col>
            </Grid>
        </View>
    );
};
export default CurrentWeather;
