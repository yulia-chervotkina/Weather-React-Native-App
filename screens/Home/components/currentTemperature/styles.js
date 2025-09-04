import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  currentTemperature: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
  },
  icon: {
    width: 64, 
    height: 64,
  }
});

export default styles;
