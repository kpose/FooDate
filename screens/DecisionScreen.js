import React from 'react';
import CustomButton  from '../components/CustomButton';
import { Alert, AsyncStorage, BackHandler, Button, FlatList, Image, Modal, Picker, ssPlatform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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


class DecisionTimeScreen extends React.Component {
    render() {
        return (
            <View style={styles.decisionTimeScreenContainer}>
                <TouchableOpacity style={styles.decisionTimeScreenTouchable}
        onPress={ () => {
          
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
        <Text style = {{paddingTop: 20 }}>( Click the food to get going )</Text>

      </TouchableOpacity>
                
            </View>
        );
    }
}

class WhoIsGoingScreen extends React.Component {

  constructor(inProps) {
    super(inProps);
    this.state = { 
      people : [ ], 
      selected : { } 
    };
  }

  render() {
    return(
      <View style={styles.listScreenContainer}>

      <Text style={styles.whoIsGoingHeadline}>Who's Going?</Text>

      { }
      <FlatList
        style={{width : "94%"}}
        data={this.state.people}
        renderItem={ ({item}) =>
          <TouchableOpacity
            style={styles.whoIsGoingItemTouchable}
            onPress={
              function() {
                
                const selected = this.state.selected;
                selected[item.key] = !selected[item.key];
                this.setState({ selected : selected });
              }.bind(this)
            }
          >
            <CheckBox
              style={styles.whoIsGoingCheckbox}
              checked={this.state.selected[item.key]}
              onPress={
                function() {
                 
                  const selected = this.state.selected;
                  selected[item.key] = !selected[item.key];
                  this.setState({ selected : selected });
                }.bind(this)
              } />
            <Text style={styles.whoIsGoingName}>
              {item.firstName} {item.lastName} ({item.relationship})
            </Text>
          </TouchableOpacity>
        }
      />

      <CustomButton text = "Next" width="94%"
        onPress = { () =>{
          participants = [ ];
          for (const person of this.state.people) {
            if(this.state.selected[person.key]) {
              const participant = Object.assign({}, person);
              participant.vetoed = "no";
              participants.push(participant);
            }
          }
          if (participants.length === 0) {
            Alert.alert("Uhh, you awake?",
            "You didn't select anyone to go. Want to give this another try?",
            [ {text: 'OK' } ], { cancelable : false }
            );
          }else {
            this.props.navigation.navigate("PreFiltersScreen");
          }
        }}
        />
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
    },

    listScreenContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      ...Platform.select({ios : {
        paddingTop : Constants.statusBarHeight
      }, android : { }
    })
    },

    whoIsGoingHeadline: {
      fontSize: 30,
      marginTop : 20, 
      marginBottom: 20
    },

    whoIsGoingItemTouchable:{
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10
    },

    whoIsGoingCheckbox: {
      marginRight: 20
    },

    whoIsGoingName: {
      flex: 1
    }
});



const DecisionScreen = createStackNavigator(
  
    
  {
    DecisionTimeScreen : { screen : DecisionTimeScreen },
    WhoIsGoingScreen : { screen : WhoIsGoingScreen },
  }, 

 
  {
    headerMode : "none"
  } 

); 


export default createAppContainer(DecisionScreen);