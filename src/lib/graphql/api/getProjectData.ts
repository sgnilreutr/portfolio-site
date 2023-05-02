import projectDataQuery from 'lib/graphql/projectData.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Query } from '__generated__/graphql'

export default async function getProjectData(id: string) {
  const projectData: ApolloQueryResult<Pick<Query, 'project'>> =
    await client.query({
      query: projectDataQuery,
      variables: {
        id,
      },
    })

  return projectData?.data
}
