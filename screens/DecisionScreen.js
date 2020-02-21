import React from 'react';
import CustomButton  from '../components/CustomButton';
import { Alert, AsyncStorage, BackHandler, Button, FlatList, Image, Modal, Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { CheckBox } from "native-base";
import Constants from 'expo-constants';


let participants = null;
let filteredRestaurants = null;
let chosenRestaurant = { };

const getRandom = (inMin, inMax) => {
    inMin = Math.ceil(inMin);
    inMax = Math.floor(inMax);
    return Math.floor(Math.random() * (inMax -inMin + 1)) +inMin;
}

export default class DecisionScreen extends React.Component {
    render() {
        return (
            <View style={styles.decisionTimeScreenContainer}>
                <TouchableOpacity style={styles.decisionTimeScreenTouchable}
        onPress={ () => {
          // Make sure there's people.
          AsyncStorage.getItem("people",
            function(inError, inPeople) {
              if (inPeople === null) {
                inPeople = [ ];
              } else {
                inPeople = JSON.parse(inPeople);
              }
              if (inPeople.length === 0) {
                Alert.alert(
                  "Not so fast, Easy!!",
                  "You haven't added any anyone. " +
                  "You should probably do that first, no?",
                  [ { text : "OK" } ],
                  { cancelable : false }
                );
              } else {
                // Ok, there's people, now make sure there's restaurants.
                AsyncStorage.getItem("restaurants",
                  function(inError, inRestaurants) {
                    if (inRestaurants === null) {
                      inRestaurants = [ ];
                    } else {
                      inRestaurants = JSON.parse(inRestaurants);
                    }
                    if (inRestaurants.length === 0) {
                      Alert.alert(
                        "Hey, calm down",
                        "You haven't added any restaurants. " +
                        "You should probably do that first, no?",
                        [ { text : "OK" } ],
                        { cancelable : false }
                      );
                    } else {
                      this.props.navigation.navigate("WhoIsGoingScreen");
                    }
                  }.bind(this)
                );
              }
            }.bind(this)
          );
        } }
      >

        <Image source ={require("../images/its-decision-time.android.png") } />
        <Text style = {{paddingTop: 20 }}>(Click the food to get going)</Text>

      </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    decisionTimeScreenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    decisionTimeScreenTouchable: {
        alignItems: "center",
        justifyContent: "center"
    }
});