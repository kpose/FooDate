import React from "react";
import CustomTextInput from "../components/CustomTextInput";
import { Alert, AsyncStorage, BackHandler, FlatList, Picker, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import CustomButton from "../components/CustomButton";


export default class AddScreen extends React.Component {
    constructor(inProps) {
        super(inProps);
        this.state= {name: "", cuisine: "", price: "", rating: "", phone: "", address: "", website: "", delivery: "", key: `r_${new Date().getTime()}`
    };
  }

  render() {
      return(
          <ScrollView style={styles.addScreenContainer}>
            <View style={styles.addScreenInnerContainer}>
                <View style = {styles.addScreenFormContainer}>
                    <CustomTextInput label = "Name" maxLength={20}
                                     stateHolder={this} stateFieldName="name" />
                    
                    <Text style = {styles.fieldLabel}>Cuisine</Text>
                    <View style = {styles.pickerContainer}>
                        <Picker style ={styles.picker} prompt="Cuisine" selectedValue = {this.state.cuisine}
                                onValueChange = { (inItemValue) => this.setState({ cuisine : inItemValue }) } >
                                    <Picker.Item label="" value="" />
              <Picker.Item label="Algerian" value="Algerian" />
              <Picker.Item label="American" value="American" />
              <Picker.Item label="BBQ" value="BBQ" />
              <Picker.Item label="Belgian" value="Belgian" />
              <Picker.Item label="Brazilian" value="Brazilian" />
              <Picker.Item label="British" value="British" />
              <Picker.Item label="Cajun" value="Cajun" />
              <Picker.Item label="Canadian" value="Canadian" />
              <Picker.Item label="Chinese" value="Chinese" />
              <Picker.Item label="Cuban" value="Cuban" />
              <Picker.Item label="Egyptian" value="Egyptian" />
              <Picker.Item label="Filipino" value="Filipino" />
              <Picker.Item label="French" value="French" />
              <Picker.Item label="German" value="German" />
              <Picker.Item label="Greek" value="Greek" />
              <Picker.Item label="Haitian" value="Haitian" />
              <Picker.Item label="Hawaiian" value="Hawaiian" />
              <Picker.Item label="Indian" value="Indian" />
              <Picker.Item label="Irish" value="Irish" />
              <Picker.Item label="Italian" value="Italian" />
              <Picker.Item label="Japanese" value="Japanese" />
              <Picker.Item label="Jewish" value="Jewish" />
              <Picker.Item label="Kenyan" value="Kenyan" />
              <Picker.Item label="Korean" value="Korean" />
              <Picker.Item label="Latvian" value="Latvian" />
              <Picker.Item label="Libyan" value="Libyan" />
              <Picker.Item label="Mediterranean" value="Mediterranean" />
              <Picker.Item label="Mexican" value="Mexican" />
              <Picker.Item label="Mormon" value="Mormon" />
              <Picker.Item label="Nigerian" value="Nigerian" />
              <Picker.Item label="Other" value="Other" />
              <Picker.Item label="Peruvian" value="Peruvian" />
              <Picker.Item label="Polish" value="Polish" />
              <Picker.Item label="Portuguese" value="Portuguese" />
              <Picker.Item label="Russian" value="Russian" />
              <Picker.Item label="Salvadorian" value="Salvadorian" />
              <Picker.Item label="Sandwiche Shop" value="Sandwiche Shop" />
              <Picker.Item label="Scottish" value="Scottish" />
              <Picker.Item label="Seafood" value="Seafood" />
              <Picker.Item label="Spanish" value="Spanish" />
              <Picker.Item label="Steak House" value="Steak House" />
              <Picker.Item label="Sushi" value="Sushi" />
              <Picker.Item label="Swedish" value="Swedish" />
              <Picker.Item label="Tahitian" value="Tahitian" />
              <Picker.Item label="Thai" value="Thai" />
              <Picker.Item label="Tibetan" value="Tibetan" />
              <Picker.Item label="Turkish" value="Turkish" />
              <Picker.Item label="Welsh" value="Welsh" />
            </Picker>
        </View>

                    <Text style = {styles.fieldLabel}>Price</Text>
                    <View style = {styles.pickerContainer}>
                        <Picker style ={styles.picker} prompt="Price" selectedValue = {this.state.price}
                                onValueChange = { (inItemValue) => this.setState({ price : inItemValue }) } >
                                    <Picker.Item label = "value" />
                                    <Picker.Item label = "1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                    <Picker.Item label="4" value="4" />
                                    <Picker.Item label="5" value="5" />
                                </Picker>
                    </View>

                    <Text style = {styles.fieldLabel}>Rating</Text>
                    <View style = {styles.pickerContainer}>
                        <Picker style ={styles.picker} prompt="Rating" selectedValue = {this.state.rating}
                                onValueChange = { (inItemValue) => this.setState({ rating : inItemValue }) } >
                                    <Picker.Item label = "value" />
                                    <Picker.Item label = "1" value="1" />
                                    <Picker.Item label="2" value="2" />
                                    <Picker.Item label="3" value="3" />
                                    <Picker.Item label="4" value="4" />
                                    <Picker.Item label="5" value="5" />
                                </Picker>
                    </View>
                    <CustomTextInput label = "Phone Number" 
                                     maxLength={20} stateHolder={this} 
                                     stateFieldName="phoneNumber" />

                    <CustomTextInput label = "Address" 
                                     maxLength={20} stateHolder={this} 
                                     stateFieldName="address" />

                    <CustomTextInput label = "Website" 
                                     maxLength={20} stateHolder={this} 
                                     stateFieldName="webSite" />

                    <CustomTextInput label = "Phone Number" 
                                     maxLength={20} stateHolder={this} 
                                     stateFieldName="phoneNumber" />

                    <Text style ={styles.fieldLabel}> Delivery? </Text>
                    <View style = {styles.pickerContainer}>
                        <Picker style = {styles.picker} prompt="Delivery?"
                                selectedValue={this.state.delivery}
                                onValueChange= { (initialValue) => this.setState({ delivery : inItemValue}) }>

                                    <Picker.Item label ="" value="" />
                                    <Picker.Item label="Yes" value="Yes" />
                                    <Picker.Item label="No" value="No" />
                                </Picker>
                    </View>
                </View>
                <View style={styles.addScreenButtonsContainer}>
                <CustomButton text="Cancel" width="44%"
                              onPress={ () => { this.props.navigation.navigate("ListScreen"); } } />
                <CustomButton text="Save" width="44%"
                              onPress={ () => {
                        AsyncStorage.getItem("restaurants",
                        function(inError, inRestaurants) {
                        if (inRestaurants === null) {
                        inRestaurants = [ ];
                        } else {
                        inRestaurants = JSON.parse(inRestaurants);
                    }
                        inRestaurants.push(this.state);
                        AsyncStorage.setItem("restaurants",
                        JSON.stringify(inRestaurants), function() {
                        this.props.navigation.navigate("ListScreen");
                    }.bind(this)
                        );

                    }.bind(this)
                        );
                    } }
                    />
                </View>
            </View>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
    addScreenContainer: {
        marginTop : Constants.statusBarHeight
    },

    addScreenContainer : {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
        width: "100%"
    },
    addScreenFormContainer : {
        width: "96%"
    },

    fieldLabel: {
        marginLeft: 10
    },
    
    pickerContainer : {
        ...Platform.select({
        ios : { },
        android : { width : "96%", borderRadius : 8, borderColor : "#c0c0c0",
       borderWidth : 2,
        marginLeft : 10, marginBottom : 20, marginTop : 4
        } 
        })
       },

    picker : {
    ...Platform.select({
    ios : { width : "96%", borderRadius : 8, borderColor : "#c0c0c0",
    borderWidth : 2,
    marginLeft : 10, marginBottom : 20, marginTop : 4
    },
    android : { }
    })
    },
    addScreenButtonsContainer : {
        flexDirection: "row",
        justifyContent : "center"
    }
});