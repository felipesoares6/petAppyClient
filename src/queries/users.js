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
