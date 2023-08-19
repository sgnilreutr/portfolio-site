import type { ApolloQueryResult } from '@apollo/client'

import type { Query } from 'gql/graphql'
import notableWorkQuery from 'lib/graphql/notableWork.graphql'
import notableWorkCollectionQuery from 'lib/graphql/notableWorkCollection.graphql'

import client from '../../../../apollo-client'

export default async function getNotableWorkData() {
  const notableWorkCollectionResponse: ApolloQueryResult<
    Pick<Query, 'notableWorkCollection'>
  > = await client.query({
    query: notableWorkCollectionQuery,
  })

  const notableWorkData: ApolloQueryResult<Pick<Query, 'notableWork'>> =
    await client.query({
      query: notableWorkQuery,
      variables: {
        id: notableWorkCollectionResponse.data.notableWorkCollection?.items[0]
          ?.sys.id,
      },
    })

  return notableWorkData.data
}
