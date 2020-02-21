/*
import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import { Alert, AsyncStorage, SafeAreaView, BackHandler, FlatList, Picker, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants';
import { Root, Toast } from "native-base";
import CustomButton from "../components/CustomButton";


export default class AddScreen extends React.Component {

    constructor(inProps) {
        super(inProps);
        this.state= { 
        firstName : "",
        lastName : "",
        relationship : "",
        key : `p_${new Date().getTime()}`
    };
  }

  render() {
      return(
        <Root>
        <ScrollView style={styles.addScreenContainer}>
          <View style={styles.addScreenInnerContainer}>
            <View style={styles.addScreenFormContainer}>
              {  }
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
              { }
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
            {  }
            <View style={styles.addScreenButtonsContainer}>
              <CustomButton
                text="Cancel"
                width="44%"
                onPress={
                  () => { this.props.navigation.navigate("ListPeople"); }
                }
              />
              <CustomButton
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
                          this.props.navigation.navigate("ListPeople");
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
      );
  }
}

const styles = StyleSheet.create({

    listScreenContainer : {
      flex : 1,
      alignItems : "center",
      justifyContent : "center",
      Branch on platform type for different styling. 
      ...Platform.select({
        ios : {
          paddingTop : Constants.statusBarHeight
        },
        android : { }
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
      marginLeft : 10
    },
  
    pickerContainer : {
      ...Platform.select({
        ios : { },
        android : {
          borderRadius : 8,
          borderColor : "#c0c0c0",
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
          borderRadius : 8,
          borderColor : "#c0c0c0",
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
*/