import { createStackNavigator } from 'react-navigation';

import Home from './Home'
import AddUser from './AddUser'
import Users from './Users'
import User from './User'

export default createStackNavigator({
  Home,
  AddUser,
  Users,
  User
}, { initialRouteName: 'Home' })
