import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';



import PeopleScreen from "../screens/PeopleScreen";
import DecisionScreen from "../screens/DecisionScreen";
//import RestaurantsScreen from "../screens/RestaurantsScreen";
import StackNavigator from './StackNavigator'


const BottomTabNavigator = createBottomTabNavigator(
    {
    People: PeopleScreen,
    Decision: DecisionScreen,
    Restaurants: StackNavigator
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'People') {
          iconName = focused
            ? 'md-person'
            : 'md-people';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          
        } else if (routeName === 'Decision') {
          iconName = focused ? 'md-git-branch' : 'md-git-merge';
        } else if (routeName === 'Restaurants') {
            iconName = focused ? 'md-restaurant' : 'ios-restaurant';
          }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default BottomTabNavigator;