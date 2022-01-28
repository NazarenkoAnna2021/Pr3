import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    countArea: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
      marginBottom: windowWidth / 2,
    },
    countBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      width: 90,
      fontSize: 30
    },
    output: {
        fontSize: 100,
        width: 250,
        height: 110,
        textAlign: 'center'
    },
    buttonText: {
      fontSize: 50
    },
    numberInput: {
        display: 'flex',
        width: '100%',
        height: 90,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#9d9d9d',
        fontSize: 30
    }
  });