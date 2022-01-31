import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const size = 15 * windowWidth / 100;

export const styles = StyleSheet.create({
    countArea: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
      marginBottom: windowWidth / 2,
      width: windowWidth - 30
    },
    countBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: size,
      width: size,
      fontSize: 30
    },
    buttonText: {
      fontSize: 50,
      textAlign: 'center'
    }
  });