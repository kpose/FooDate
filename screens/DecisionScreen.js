import React from 'react'
import { Text, View, StyleSheet } from 'react-native';



export default class DecisionScreen extends React.Component {

    static navigationOptions = {

    };

    render() {
        return (
            <View style = {styles.container}>
                <Text> Hello Decision</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});