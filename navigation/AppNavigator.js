import React from 'react';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
import FeedStack from './StackNavigator';

 export default createAppContainer(
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
); 




