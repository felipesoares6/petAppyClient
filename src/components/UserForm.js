import React from 'react'
import { View, Button, TextInput } from 'react-native'

class UserForm extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: ''
  }

  handleSubmit = () => this.props.handleSubmit({ variables: { ...this.state } })

  render() {
    const {
      name,
      email,
      phone,
      password
    } = this.state

    return (
      <View>
        <TextInput
          onChangeText={(name) => this.setState({ name })}
          value={name}
          placeholder="Name"
        />

        <TextInput
          onChangeText={(phone) => this.setState({ phone: Number(phone) })}
          value={phone}
          placeholder="Phone"
          keyboardType="phone-pad"
        />

        <TextInput
          onChangeText={(email) => this.setState({ email })}
          value={email}
          placeholder="E-mail"
          keyboardType="email-address"
        />

        <TextInput
          onChangeText={(password) => this.setState({ password })}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Button
          onPress={this.handleSubmit}
          title="Create"
        />
      </View>
    )
  }
}

export default UserForm
