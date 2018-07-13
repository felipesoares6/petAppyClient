import React from 'react'
import { View, Text } from 'react-native'

const UserCard = ({ user }) => (
  <View>
    <Text>Name: {user.name}</Text>
    <Text>E-mail: {user.email}</Text>
    <Text>Phone: {user.phone}</Text>
  </View>
)

export default UserCard
