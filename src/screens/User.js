import React from 'react'
import { View, Text, Button } from 'react-native'

import { Query } from 'react-apollo'

import { USER } from '../queries/users'

class User extends React.Component {
  static navigationOptions = {
    title: 'Find the user'
  }

  render() {
    const id = "1"
    return (
      <Query query={USER} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading..</Text>
          if (error) return <Text>{`Error!: ${error}`}</Text>

          const { user } = data

          return (
            <View key={user.id}>
              <Text>Name: {user.name}</Text>
              <Text>E-mail: {user.email}</Text>
              <Text>Phone: {user.phone}</Text>
            </View>
          )
        }}
      </Query>
    )
  }
}

export default User
