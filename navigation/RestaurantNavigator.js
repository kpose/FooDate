import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddRestaurants from '../screens/AddRestaurants';
import ListRestaurants from '../screens/ListRestaurants';


const RestaurantNavigator = createStackNavigator({
    ListScreen: ListRestaurants,
    AddScreen: AddRestaurants,
  },
  {
    initialRouteName: 'ListScreen',
  });
  
  export default createAppContainer(RestaurantNavigator );


  