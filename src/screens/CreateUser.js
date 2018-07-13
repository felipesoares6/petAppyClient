import React from 'react'
import { View, Text } from 'react-native'
import CreateUserForm from '../containers/CreateUserForm'

class CreateUser extends React.Component {
  static navigationOptions = {
    title: 'Create user'
  }

  render() {
    return (
      <View>
        <Text> Create an user </Text>

        <CreateUserForm navigation={this.props.navigation} />
      </View>
    )

  }
}

export default CreateUser
