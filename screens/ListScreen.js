import React from "react";
import CustomButton from "../components/CustomButton";
import { Alert, AsyncStorage, BackHandler, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { Root, Toast } from "native-base";
import Constants from 'expo-constants';



export default class ListScreen extends React.Component {

    constructor(inProps) {
        super(inProps);
        this.state = { listData: [ ]
         };
    }

    componentDidMount() {
        BackHandler.addEventListener( "hardwareBackPress", () => { return true; } );

        AsyncStorage.getItem("restaurants",
            function(inError, inRestaurants) {
                if (inRestaurants === null) {
                    inRestaurants = [ ];
                } else {
                    inRestaurants = JSON.parse(inRestaurants);
                }
                this.setState({ listData : inRestaurants });
            }.bind(this)
            );
    };

    

    render() { 
        return (
         <Root>
            <View style={styles.listScreenContainer}>
            <CustomButton text="Add Restaurant" width="94%"
                onPress={ () => { this.props.navigation.navigate("AddScreen"); } } />

            <FlatList style={styles.restaurantList} data={this.state.listData}
                    renderItem={ ({item}) =>
                    <View style={styles.restaurantContainer}>
                        <Text style={styles.restaurantName}>{item.name}</Text>
                        <CustomButton text="Delete"
                onPress={ () => {
                Alert.alert("Please confirm",
                    "Are you sure you want to delete this restaurant?",
                    [
                        { text: "Yes", onPress: () => {
                            AsyncStorage.getItem ("restaurants", 
                            function(inError, inRestaurants) {
                                if (inRestaurants === null) {
                                    inRestaurants = [ ];        
                                } else {
                                    inRestaurants = JSON.parse(inRestaurants);
                                }
                                for (let i = 0; i < inRestaurants.length; i++) {
                                    const restaurant = inRestaurants[i];
                                    if (restaurant.key === item.key) {
                                        inRestaurants.splice(i, 1);
                                        break;
                                    }
                                }
                                AsyncStorage.setItem("restaurants",
                                    JSON.stringify(inRestaurants), function() {
                                        this.setState({ listData : inRestaurants });
                                        Toast.show({ text: "Restaurant Deleted",
                                        position: "bottom", type: "danger", 
                                        duration : 2000
                                        });
                                    }.bind(this)
                                    );
                            }.bind(this)
                            );
                        } },
                        { text : "No" }, { text : "Cancel", style : "cancel" }
                    ],
                    { cancelable : true }
                    )
                } } />
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
        alignItems: "center",
        justifyContent : "center",
        ...Platform.select({
            ios : { paddingTop : Constants.statusBarHeight },
            android: { }
        })
    },
    restaurantList : { 
        width : "94%"
    },
    restaurantContainer : { 
        flexDirection : "row", 
        marginTop : 4,
        marginBottom : 4,
        borderColor : "#e0e0e0", 
        borderBottomWidth : 2, 
        alignItems : "center"
    },
    restaurantName : { 
        flex : 1 
    }
});