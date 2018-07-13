import React from 'react'
import { View, Text } from 'react-native'

import { Query } from 'react-apollo'
import { GET_USER } from '../queries/users'

import UserCard from '../components/UserCard'

const UserDetails = ({ id }) => (
  <Query query={GET_USER} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading..</Text>

      if (error) return <Text>{`Error!: ${error}`}</Text>

      if (data.user) return <UserCard user={data.user} />

      return <Text>User not found!</Text>
    }}
  </Query>
)

export default UserDetails
