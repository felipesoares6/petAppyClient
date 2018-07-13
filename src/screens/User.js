import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

import UserDetails from '../containers/UserDetails'

class User extends React.Component {
  static navigationOptions = {
    title: 'Find the user'
  }

  state = { userId: '' }

  render() {
    const { userId } = this.state

    return (
      <View>
        <TextInput
          onChangeText={(value) => this.setState({ userId: value })}
          value={userId}
        />

        {!!userId && <UserDetails id={userId.toString()} />}
      </View>
    )
  }
}

export default User
