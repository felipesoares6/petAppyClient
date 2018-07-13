import React from 'react'
import { View, Text, Button } from 'react-native'

import { Query } from 'react-apollo'
import { GET_USERS } from '../queries/users'

import UserCard from '../components/UserCard'

mapUsers = (users) => users.map(user => <UserCard key={user.id} user={user} />)

const UsersList = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading..</Text>

      if (error) return <Text>{`Error!: ${error}`}</Text>

      if (data.users) return mapUsers(data.users)
    }}
  </Query>
)

export default UsersList
