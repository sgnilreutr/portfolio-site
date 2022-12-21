import techStackQuery from 'lib/graphql/techStackData.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from '__generated__/graphql'

export default async function getTechStackData() {
  const techStackData: ApolloQueryResult<Pick<Query, 'techStackCollection'>> =
    await client.query({
      query: techStackQuery,
    })

  return techStackData?.data
}
