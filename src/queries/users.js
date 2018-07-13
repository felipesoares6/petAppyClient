import gql from 'graphql-tag'

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      phone
    }
  }
`

export const GET_USER = gql`
  query user($id: ID!){
    user(id: $id){
      id
      name
      email
      phone
    }
  }

`

export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $phone: Int
    $email: String!
    $password: String!
  ){
    createUser(
      name: $name
      phone: $phone
      authProvider: {
        account: {
          email: $email
          password: $password
        }
      }
    ){
      id
      name
      email
      phone
    }
  }

`
