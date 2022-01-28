
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import { CounterContainer } from './src/components/counterContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= 'red'/>
      <CounterContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  }
});

export default App;
