import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  currentWeatherDataItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 155,
    width: 70,
    
  },
  currentWeatherDataItemText: {
    fontSize: 18,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10  
  },
  image: {
    width: 43, 
    height: 43,
    marginTop: 20,
    marginBottom: 20
  }
});

export default styles;
