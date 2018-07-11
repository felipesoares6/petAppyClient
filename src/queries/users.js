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

export const USER = (id) => gql`
  query {
    users(id ${id}){
      id
      name
      email
      phone
    }
  }

`
