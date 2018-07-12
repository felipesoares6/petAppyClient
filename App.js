import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Stack from './src/screens/Stack'

const httpLink = new HttpLink({ uri: 'http://192.168.0.20:3000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Stack />
  </ApolloProvider>
)

export default App
