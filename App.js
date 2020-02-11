import React from "react";
import { Constants } from "expo";
import { Image, Platform } from "react-native";
import { TabNavigator } from "react-navigation";
import { PeopleScreen } from "./screens/PeopleScreen";
import { DecisionScreen } from "./screens/DecisionScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";

console.log(`FooDate starting on ${Platform.OS}`);

const platformOS = Platform.OS.toLowerCase();