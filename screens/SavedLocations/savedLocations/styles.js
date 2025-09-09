import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: '20',
  },
  header: {
    fontSize: 24,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 10
  },
  list: {
    fontSize: 18,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 10
  }
});

export default styles;