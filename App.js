import React from 'react';
import AnimatedSplash from "react-native-animated-splash-screen";

import AppNavigator from './navigation/AppNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator'

class App extends React.Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <AnimatedSplash
        isLoaded={this.state.isLoaded}
        logoImage={require("./assets/logo.jpg")}
        backgroundColor={"#9C7952"}
        logoHeight={150}
        logoWidth={150}
      >
        <AppNavigator />
      </AnimatedSplash>
    );
  }
}

export default App;