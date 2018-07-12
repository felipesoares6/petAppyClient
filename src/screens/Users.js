import React from 'react'
import { View, Text, Button } from 'react-native'

import { graphql } from 'react-apollo'

import { USERS } from '../queries/users'

class Users extends React.Component {
  static navigationOptions = {
    title: 'Users'
  }

  render() {
    const { data } = this.props

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
        {
          data && data.error && <Text>{data.error.trace}</Text>
        }
      </View>
    )
  }
}

export default graphql(USERS)(Users)
