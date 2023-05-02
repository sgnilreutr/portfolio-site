import heroMetaQuery from 'lib/graphql/heroMeta.graphql'
import heroDetailsQuery from 'lib/graphql/heroDetails.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from 'gql/graphql'

export default async function getHeroData() {
  const heroCollectionResponse: ApolloQueryResult<
    Pick<Query, 'mainBannerCollection'>
  > = await client.query({
    query: heroMetaQuery,
  })

  const heroData: ApolloQueryResult<Pick<Query, 'mainBanner'>> =
    await client.query({
      query: heroDetailsQuery,
      variables: {
        id: heroCollectionResponse?.data?.mainBannerCollection?.items[0]?.sys
          .id,
      },
    })

  return heroData?.data
}
