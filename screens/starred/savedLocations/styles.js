import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Overpass',
    color: 'white',
    textShadowColor: 'grey',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    margin: 10,
  },
  list: {
    margin: 10,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    margin: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 3,
    paddingBottom: 5,
    borderStyle: 'solid',
    borderColor: '#ff4a4aff',
    backgroundColor: '#ff4a4aff',
    borderWidth: 1.5,
    borderRadius: 50,
  },
});

export default styles;
