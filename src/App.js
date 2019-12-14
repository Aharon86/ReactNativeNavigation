import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MealsNavigator from './navigator/MealsNavigator';

const App = () => {
  return <MealsNavigator />;
  // return (
  //   <View>
  //     <Text>aaas</Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  app: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    fontSize: 30,
    fontFamily: 'OpenSans-Bold',
  },
});

export default App;
