import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import PeopleScreen from "../screens/PeopleScreen";
import DecisionScreen from "../screens/DecisionScreen";
import RestaurantsScreen from "../screens/RestaurantsScreen";


const BottomTabNavigator = createBottomTabNavigator({
    People: PeopleScreen,
    Decision: DecisionScreen,
    Restaurant: RestaurantsScreen
});

export default BottomTabNavigator;