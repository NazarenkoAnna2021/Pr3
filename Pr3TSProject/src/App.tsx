
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { CounterContainer } from './components/counterContainer';

export const App = () => {
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
