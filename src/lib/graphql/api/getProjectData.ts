import projectDataQuery from 'lib/graphql/projectData.graphql'

import client from '../../../../apollo-client'

import type { ApolloQueryResult } from '@apollo/client'
import type { Project } from 'gql/graphql'

export default async function getProjectData(id: string) {
  const projectData: ApolloQueryResult<{ project: Project } | undefined> =
    await client.query({
      query: projectDataQuery,
      variables: {
        id,
      },
    })
  return projectData?.data?.project
}
