import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AddPeople from '../screens/AddPeople';
import ListPeople from '../screens/ListPeople';


const PeopleNavigator = createStackNavigator({
    ListPeople: ListPeople,
    AddPeople: AddPeople,
  },
  {
    initialRouteName: 'ListPeople',
  });
  
  export default createAppContainer(PeopleNavigator );
