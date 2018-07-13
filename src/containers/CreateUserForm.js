import React from 'react'
import { View, Text, TextInput } from 'react-native'

import { Mutation } from 'react-apollo'
import { CREATE_USER } from '../queries/users'

import UserForm from '../components/UserForm'

const CreateUserForm = ({ navigation }) => (
  <Mutation mutation={CREATE_USER}>
    {(createUser, { loading, error, data }) => {
      if (data) {
        navigation.navigate('Home')
      }

      return (
        <View>
          {loading && <Text>Loading..</Text>}

          {error && <Text>{`Error!: ${error}`}</Text>}

          <UserForm handleSubmit={createUser} error={error} />
        </View>
      )
    }}
  </Mutation>
)

export default CreateUserForm
