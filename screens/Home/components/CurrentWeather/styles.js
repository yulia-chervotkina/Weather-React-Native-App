import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    shadowColor: '#176ff5ff',
    shadowOffset: {width: -3, height: 4},
    shadowRadius: 6,
    shadowOpacity: 0.7,
    elevation: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },
  gridContainer: {
    flexDirection: 'column',
    padding: 5,
    marginTop: 10,
  },
   text: {
    height: 40,
    paddingTop: 2,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  icon: {
    width: 64, 
    height: 64,
  },
  condition: {
    fontSize: 24,
  },
  day: {
    padding: 10
  },
  temperature: {
    fontSize: 100,
  }
});

export default styles;
