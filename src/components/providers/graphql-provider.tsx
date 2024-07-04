'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export const GraphQLProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const client = new ApolloClient({ uri: 'https://apollo-graphql-server-pied.vercel.app', cache: new InMemoryCache() })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
