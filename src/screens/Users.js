import React from 'react'
import { View, Text, Button } from 'react-native'

import { Query } from 'react-apollo'

import { USERS } from '../queries/users'

class Users extends React.Component {
  static navigationOptions = {
    title: 'Users'
  }

  render() {
    return (
      <Query query={USERS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading..</Text>
          if (error) return <Text>{`Error!: ${error}`}</Text>

          return (
            <View>
              {
                data.users.map(user =>
                  <View key={user.id}>
                    <Text>Name: {user.name}</Text>
                    <Text>E-mail: {user.email}</Text>
                    <Text>Phone: {user.phone}</Text>
                  </View>
                )
              }
            </View>
          )
        }}
      </Query>
    )
  }
}

export default Users
