import { createStackNavigator } from 'react-navigation';

import Home from './Home'
import AddUser from './AddUser'
import Users from './Users'

export default createStackNavigator({
  Home,
  AddUser,
  Users
}, { initialRouteName: 'Home' })
