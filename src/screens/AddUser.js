import React from 'react'
import { View, Text, Button } from 'react-native'

class AddUser extends React.Component {
  static navigationOptions = {
    title: 'Add user'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text> Add a new user </Text>

        <Button
          title="Go back"
          onPress={() => navigate('Home')}
        />
      </View>
    )

  }
}

export default AddUser
