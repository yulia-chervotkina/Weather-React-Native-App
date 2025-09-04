import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  currentWeatherData: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 10,
  },
  currentWeatherDataItem: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
