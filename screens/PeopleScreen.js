import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
    <Ionicons
      name={'md-people'}
      size={35}
      color={props.focused ? 'blue' : 'darkgrey'}
    />
  )
  
export default class PeopleScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };


    render() {
        return (
            <View style = {styles.container}>
                <Text> Hello People</Text>
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