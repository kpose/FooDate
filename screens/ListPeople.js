/*
import React from "react";
import CustomButton from "../components/CustomButton";
import { Alert, AsyncStorage, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { Root, Toast } from "native-base";
import Constants from 'expo-constants';



export default class ListPeople extends React.Component {

    constructor(inProps) {
        super(inProps);
        this.state = { listData: [ ]
         };
    }

    componentDidMount() {
        BackHandler.addEventListener( "hardwareBackPress", () => { return true; } );

        AsyncStorage.getItem("people ",
            function(inError, inPeople ) {
                if (inPeople  === null) {
                    inPeople  = [ ];
                } else {
                    inPeople  = JSON.parse(inPeople );
                }
                this.setState({ listData : inPeople  });
            }.bind(this)
            );
    };

    

    render() { 
        return (
          <Root>
          <View style={styles.listScreenContainer}>
            { }
            <CustomButton
              text="Add Person"
              width="94%"
              onPress={ () => { this.props.navigation.navigate("AddPeople"); } }
            />
            { }
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
                              // Pull data out of storage.
                              AsyncStorage.getItem("people",
                                function(inError, inPeople) {
                                  if (inPeople === null) {
                                    inPeople = [ ];
                                  } else {
                                    inPeople = JSON.parse(inPeople);
                                  }
                                  // Find the right one to delete and splice it out.
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