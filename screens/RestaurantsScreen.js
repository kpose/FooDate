import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ListScreen from './ListScreen';
import AddScreen from './AddScreen';

const TabIcon = (props) => (
    <Ionicons
      name={'md-restaurant'}
      size={35}
      color={props.focused ? 'blue' : 'darkgrey'}
    />
  )


export default class RestaurantsScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    render() {
        return (
            <View style = {styles.container}>
                <AddScreen />
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