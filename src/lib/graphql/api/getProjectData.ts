import latestProjectQuery from 'lib/graphql/latestProjectData.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from '__generated__/graphql'

export default async function getLatestProjectData(limit?: number) {
  const latestProjectData: ApolloQueryResult<Pick<Query, 'projectCollection'>> =
    await client.query({
      query: latestProjectQuery,
      variables: {
        limit,
      },
    })

  return latestProjectData?.data
}
