import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddScreen from '../screens/AddScreen';
import ListScreen from '../screens/ListScreen';


const FeedStack = createStackNavigator({
    List: ListScreen,
    AddScreen: AddScreen,
  },
  {
    initialRouteName: 'List',
  });
  
  export default createAppContainer(FeedStack);


  