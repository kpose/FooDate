import React from 'react';
//import { StyleSheet } from 'react-native';
import {
  Button,
  View,
  Text, StyleSheet
} from 'react-native';

export const Home = (props) => (
  <View style={styles.container}>
    <Text category='h4'>Welcome to UI Kitten</Text>
    <Button onPress={props.toggleTheme}>Toggle Dark Mode 🌚</Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});




import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';

 export default createAppContainer(
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
); 

