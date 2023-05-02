import projectDataCollection from 'lib/graphql/projectDataCollection.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from 'gql/graphql'

export default async function getMultipleProjectData(limit?: number) {
  const multipleProjectData: ApolloQueryResult<
    Pick<Query, 'projectCollection'>
  > = await client.query({
    query: projectDataCollection,
    variables: {
      limit,
    },
  })

  return multipleProjectData?.data
}
