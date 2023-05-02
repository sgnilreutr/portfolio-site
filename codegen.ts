import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.contentful.com/content/v1/spaces/qyxj595mgdfb': {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
    },
  ],

  documents: ['src/**/*.tsx', 'src/lib/graphql/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      config: {
        reactApolloVersion: 3,
      },
    },
  },
}
export default config
