import React from 'react'
import { View, Text, Button } from 'react-native'

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text> Welcome to petAppy! </Text>

        <Button
          title="Check the users"
          onPress={() => navigate('Users')}
        />

        <Button
          title="Find a specific user"
          onPress={() => navigate('User')}
        />

        <Button
          title="Create an user"
          onPress={() => navigate('CreateUser')}
        />
      </View>
    )
  }
}

export default Home
