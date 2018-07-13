import { createStackNavigator } from 'react-navigation';

import Home from './Home'
import CreateUser from './CreateUser'
import Users from './Users'
import User from './User'

export default createStackNavigator({
  Home,
  CreateUser,
  Users,
  User
}, { initialRouteName: 'Home' })
