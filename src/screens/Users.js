import React from 'react'

import UsersList from '../containers/UsersList'

class Users extends React.Component {
  static navigationOptions = {
    title: 'Users'
  }

  render() {
    return (
      <UsersList />
    )
  }
}

export default Users
