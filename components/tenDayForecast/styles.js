import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tenDayForecast: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    flexDirection: 'column',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 10,
  },
  tenDayForecastItem: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-around',
  },
});

export default styles;
