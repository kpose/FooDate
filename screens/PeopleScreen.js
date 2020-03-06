import React from "react";
import CustomButton2 from "../components/CustomButton2";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import {Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Root, Toast } from "native-base";
import Constants from 'expo-constants';

  
class ListScreen extends React.Component {
  _isMounted = false;

    constructor(inProps) {
  
      super(inProps);
  
      this.state = {
        listData : [ ]
      };
  
    }

    componentDidMount() {
      this._isMounted = true;
      const passedData = this.props.navigation.getParam('passed');
      this.setState({
        passedData
      });


      

      // Block hardware back button on Android.
      BackHandler.addEventListener(
        "hardwareBackPress", () => { return true; }
      );

     
  
      // Get list of people.
      AsyncStorage.getItem("people",
        function(inError, inPeople) {
          if (inPeople === null) {
            inPeople = [ ];
          } else {
            inPeople = JSON.parse(inPeople);
          }
          if (this._isMounted) {
            this.setState({ listData : inPeople });
          }
        }.bind(this)
      );
  
    };

    componentWillUnmount() {
      this._isMounted = false;
    }
 
    render() { return (
  
      <Root>
        <View style={styles.listScreenContainer}>
          {  }
          <CustomButton2
            text="Add Person"
            width="94%"
            onPress={ () => { this.props.navigation.navigate("AddScreen"); } }
          />
          { /* ########## Person list ########## */ }
          <FlatList
            style={styles.personList}
            data={this.state.listData}
            renderItem={ ({item}) =>
              <View style={styles.personContainer}>
                <Text style={styles.personName}>
                  {item.firstName} {item.lastName} ({item.relationship})
                </Text>
                <CustomButton
                  text="Delete"
                  onPress={ () => {
                    Alert.alert("Please confirm",
                      "Are you sure you want to delete this person?",
                      [
                        { text : "Yes",
                          onPress : () => {
                            
                            AsyncStorage.getItem("people",
                              function(inError, inPeople) {
                                if (inPeople === null) {
                                  inPeople = [ ];
                                } else {
                                  inPeople = JSON.parse(inPeople);
                                }
                                for (let i = 0; i < inPeople.length; i++) {
                                  const person = inPeople[i];
                                  if (person.key === item.key) {
                                    inPeople.splice(i, 1);
                                    break;
                                  }
                                }
                                // Store updated data in storage.
                                AsyncStorage.setItem("people",
                                  JSON.stringify(inPeople), function() {
                                    // Set new state to update list.
                                    this.setState({ listData : inPeople });
                                    // Show toast message to confirm deletion.
                                    Toast.show({
                                      text : "Person deleted",
                                      position : "bottom",
                                      type : "danger",
                                      duration : 2000
                                    });
                                  }.bind(this)
                                );
                              }.bind(this)
                            );
                          }
                        },
                        { text : "No" },
                        { text : "Cancel", style : "cancel" }
                      ],
                      { cancelable : true }
                    )
                  } }
                />
              </View>
            }
          />
        </View>
      </Root>
  
    ); }  
    
  }

class AddScreen extends React.Component {
    constructor(inProps) {
  
      super(inProps);
  
      this.state = {
        firstName : "",
        lastName : "",
        relationship : "",
        key : `p_${new Date().getTime()}`
      };
  
    } 
    render() { return (
  
      <Root>
        <ScrollView style={styles.addScreenContainer}>
          <View style={styles.addScreenInnerContainer}>
            <View style={styles.addScreenFormContainer}>
              { }
              <CustomTextInput
                label="First Name"
                maxLength={20}
                stateHolder={this}
                stateFieldName="firstName"
              />
              { }
              <CustomTextInput
                label="Last Name"
                maxLength={20}
                stateHolder={this}
                stateFieldName="lastName"
              />
              {  }
              <Text style={styles.fieldLabel}>Relationship</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  style={styles.picker}
                  prompt="Relationship"
                  selectedValue={this.state.relationship}
                  onValueChange={
                    (inItemValue) => this.setState({ relationship : inItemValue })
                  }
                >
                  <Picker.Item label="" value="" />
                  <Picker.Item label="Me" value="Me" />
                  <Picker.Item label="Family" value="Family" />
                  <Picker.Item label="Friend" value="Friend" />
                  <Picker.Item label="Coworker" value="Coworker" />
                  <Picker.Item label="Other" value="Other" />
                </Picker>
              </View>
            </View>
            { }
            <View style={styles.addScreenButtonsContainer}>
              <CustomButton
                text="Cancel"
                width="44%"
                onPress={
                  () => { this.props.navigation.navigate("ListScreen"); }
                }
              />
              <CustomButton2
                text="Save"
                width="44%"
                onPress={ () => {
                  AsyncStorage.getItem("people",
                    function(inError, inPeople) {
                      if (inPeople === null) {
                        inPeople = [ ];
                      } else {
                        inPeople = JSON.parse(inPeople);
                      }
                      inPeople.push(this.state);
                      AsyncStorage.setItem("people",
                        JSON.stringify(inPeople), function() {
                          this.props.navigation.navigate("ListScreen", {passed: this.state});
                        }.bind(this)
                      );
                    }.bind(this)
                  );
                } }
              />
            </View>
          </View>
        </ScrollView>
      </Root>
  
    ); } 
  
  
  } 
  
const PeopleScreen = createStackNavigator(
  
    
    {
      ListScreen : { screen : ListScreen },
      AddScreen : { screen : AddScreen }
    }, 
  
   
    {
      headerMode : "none",
      initialRouteName : "ListScreen"
    } 
  
  ); 
  
  
export default createAppContainer(PeopleScreen);



  
const styles = StyleSheet.create({

    listScreenContainer : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
     
      ...Platform.select({
        ios : {
          paddingTop : Constants.statusBarHeight
        },
        android : { marginTop: 20 }
      })
    },
  
    personList : {
      width : "94%"
    },
  
    personContainer : {
      flexDirection : "row",
      marginTop : 4,
      marginBottom : 4,
      borderColor : "#e0e0e0",
      borderBottomWidth : 2,
      alignItems : "center"
    },
  
    personName : {
      flex : 1
    },
  
    addScreenContainer : {
      marginTop : Constants.statusBarHeight
    },
  
    addScreenInnerContainer : {
      flex : 1,
      alignItems : "center",
      paddingTop : 20,
      width : "100%"
    },
  
    addScreenFormContainer : {
      width : "96%"
    },
  
    fieldLabel : {
      marginLeft : 10,
      color: "#000000",
      fontWeight: "bold",
      fontSize: 15
    },
  
    pickerContainer : {
      ...Platform.select({
        ios : { },
        android : {
          borderRadius : 8,
          borderColor : "#EFA70D",
          borderWidth : 2,
          width : "96%",
          marginLeft : 10,
          marginBottom : 20,
          marginTop : 4
        }
      })
    },
  
    picker : {
      ...Platform.select({
        ios : {
          width : "96%",
          borderRadius : 30,
          borderColor : "#EFA70D",
          borderWidth : 2,
          marginLeft : 10,
          marginBottom : 20,
          marginTop : 4
        },
        android : { }
      })
    },
  
    addScreenButtonsContainer : {
      flexDirection : "row",
      justifyContent : "center"
    }
  
  });
  