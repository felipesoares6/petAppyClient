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
          title="Add a new user"
          onPress={() => navigate('AddUser')}
        />
      </View>
    )
  }
}

export default Home
