import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.contentful.com/content/v1/spaces/qyxj595mgdfb': {
        headers: {
          Authorization: `Bearer k6Q26ZH8o0Eh1l-bO6nGc20Fybfurd7dhiSKrb6YGe8`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', '!src/lib/graphql/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
    },
  },
}
export default config
