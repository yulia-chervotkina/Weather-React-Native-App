import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    paddingLeft: '20',
    paddingRight: '20',
    // width: '100%', 
    // height: '400%',
  },
  linearGradient: {
    // flex: 1,
    borderRadius: 5,
  },
  button: {
    // backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 10,
    shadowColor: 'lime',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
});

export default styles;