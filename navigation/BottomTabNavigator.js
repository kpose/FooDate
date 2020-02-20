import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';


//import PeopleScreen from "../screens/PeopleScreen";
import DecisionScreen from "../screens/DecisionScreen";
//import RestaurantsScreen from "../screens/RestaurantsScreen";
import RestaurantNavigator  from './RestaurantNavigator'
import PeopleNavigator  from './PeopleNavigator'


const BottomTabNavigator = createBottomTabNavigator(
    {
    People: PeopleNavigator,
    Decision: DecisionScreen,
    Restaurants: RestaurantNavigator 
},
{
  initialRouteName: "Decision",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'People') {
          iconName = focused
            ? 'md-person'
            : 'md-people';
          
        } else if (routeName === 'Decision') {
          iconName = focused ? 'md-git-branch' : 'md-git-merge';
        } else if (routeName === 'Restaurants') {
            iconName = focused ? 'md-restaurant' : 'ios-restaurant';
          }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#9C7952',
      initialRouteName: "Decision"
      
    },
  }
);

export default BottomTabNavigator;