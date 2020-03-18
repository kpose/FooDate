import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';

 export default createAppContainer(
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
); 