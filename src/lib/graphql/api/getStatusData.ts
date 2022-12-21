import statusMetaQuery from 'lib/graphql/statusMeta.graphql'
import statusDetailsQuery from 'lib/graphql/statusDetails.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from '__generated__/graphql'

export default async function getStatusData() {
  const statusCollectionResponse: ApolloQueryResult<
    Pick<Query, 'componentTextCollection'>
  > = await client.query({
    query: statusMetaQuery,
  })

  const statusData: ApolloQueryResult<Pick<Query, 'componentText'>> =
    await client.query({
      query: statusDetailsQuery,
      variables: {
        id: statusCollectionResponse?.data?.componentTextCollection?.items.find(
          (item) => item?.internalName === 'Status'
        )?.sys.id,
      },
    })

  return statusData?.data
}
