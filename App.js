import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ApiContainer from './App/Screens/ApiContainer';

const App = () => {
  return <>{<ApiContainer />}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
