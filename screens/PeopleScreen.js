import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CustomButton from '../components/CustomButton';

/*const TabIcon = (props) => (
    <Ionicons
      name={'md-restaurant'}
      size={35}
      color={props.focused ? 'blue' : 'darkgrey'}
    />
  )*/
  
export default class PeopleScreen extends React.Component {

  

    render() {
        return (
            <View style = {styles.container}>
               
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