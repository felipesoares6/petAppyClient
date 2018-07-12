import gql from 'graphql-tag'

export const USERS = gql`
  query {
    users {
      id
      name
      email
      phone
    }
  }
`

export const USER = gql`
  query user($id: ID!){
    user(id: $id){
      id
      name
      email
      phone
    }
  }

`
