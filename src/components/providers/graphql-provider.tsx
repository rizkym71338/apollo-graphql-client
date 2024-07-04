'use client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { ENV } from '@/libs'

export const GraphQLProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const client = new ApolloClient({ uri: ENV.NEXT_PUBLIC_GRAPHQL_URL, cache: new InMemoryCache() })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
