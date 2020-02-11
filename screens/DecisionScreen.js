import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
    <Ionicons
      name={'ios-hourglass'}
      size={35}
      color={props.focused ? 'blue' : 'darkgrey'}
    />
  )


export default class DecisionScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
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