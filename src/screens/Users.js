import React from 'react'
import { View, Text, Button } from 'react-native'

import { graphql } from 'react-apollo'

import { USERS } from '../queries/users'

class Users extends React.Component {
  static navigationOptions = {
    title: 'Users'
  }

  render() {
    const { navigate, data } = this.props.navigation

    return (
      <View>
        {
          data && data.users && data.users.map(user =>
            <View key={user.id}>
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.phone}</Text>
            </View>
          )
        }
        {
          data && data.loading && <Text>Loading..</Text>
        }
        <Button
          title="Go back"
          onPress={() => navigate('Home')}
        />
      </View>
    )
  }
}


export default graphql(USERS)(Users)
