/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query GetHeroDetails($id: String!) {\n  mainBanner(id: $id) {\n    mainTitle\n    subTitle\n    image {\n      height\n      width\n      description\n      fileName\n      url\n    }\n  }\n}':
    types.GetHeroDetailsDocument,
  'query GetHeroMeta {\n  mainBannerCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}':
    types.GetHeroMetaDocument,
  'query GetNotableWork($id: String!) {\n  notableWork(id: $id) {\n    internalName\n    notableWorkListCollection {\n      items {\n        sys {\n          id\n        }\n        ... on NotableItem {\n          label\n          notableListItem\n        }\n      }\n    }\n  }\n}':
    types.GetNotableWorkDocument,
  'query GetNotableWorkCollection {\n  notableWorkCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}':
    types.GetNotableWorkCollectionDocument,
  'query GetProjectData($id: String!) {\n  project(id: $id) {\n    title\n    date\n    sys {\n      id\n    }\n    contentCollection {\n      items {\n        sys {\n          id\n        }\n        ... on ComponentImage {\n          __typename\n          title\n          sys {\n            id\n          }\n          image {\n            title\n            description\n            url\n            width\n            height\n          }\n        }\n        ... on ComponentText {\n          __typename\n          internalName\n          text\n        }\n        ... on Hyperlink {\n          __typename\n          sys {\n            id\n          }\n          link\n          linkName\n        }\n      }\n    }\n  }\n}':
    types.GetProjectDataDocument,
  'query GetProjectDataCollection($limit: Int) {\n  projectCollection(limit: $limit, order: date_DESC) {\n    items {\n      sys {\n        id\n      }\n      title\n      date\n      contentCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            __typename\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetProjectDataCollectionDocument,
  'query GetStatusDetails($id: String!) {\n  componentText(id: $id) {\n    text\n  }\n}':
    types.GetStatusDetailsDocument,
  'query GetStatusMeta {\n  componentTextCollection {\n    items {\n      sys {\n        id\n      }\n      internalName\n    }\n  }\n}':
    types.GetStatusMetaDocument,
  'query GetTechStack {\n  techStackCollection {\n    items {\n      internalName\n      activeSkillsCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetTechStackDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetHeroDetails($id: String!) {\n  mainBanner(id: $id) {\n    mainTitle\n    subTitle\n    image {\n      height\n      width\n      description\n      fileName\n      url\n    }\n  }\n}'
): (typeof documents)['query GetHeroDetails($id: String!) {\n  mainBanner(id: $id) {\n    mainTitle\n    subTitle\n    image {\n      height\n      width\n      description\n      fileName\n      url\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetHeroMeta {\n  mainBannerCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}'
): (typeof documents)['query GetHeroMeta {\n  mainBannerCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetNotableWork($id: String!) {\n  notableWork(id: $id) {\n    internalName\n    notableWorkListCollection {\n      items {\n        sys {\n          id\n        }\n        ... on NotableItem {\n          label\n          notableListItem\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query GetNotableWork($id: String!) {\n  notableWork(id: $id) {\n    internalName\n    notableWorkListCollection {\n      items {\n        sys {\n          id\n        }\n        ... on NotableItem {\n          label\n          notableListItem\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetNotableWorkCollection {\n  notableWorkCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}'
): (typeof documents)['query GetNotableWorkCollection {\n  notableWorkCollection {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProjectData($id: String!) {\n  project(id: $id) {\n    title\n    date\n    sys {\n      id\n    }\n    contentCollection {\n      items {\n        sys {\n          id\n        }\n        ... on ComponentImage {\n          __typename\n          title\n          sys {\n            id\n          }\n          image {\n            title\n            description\n            url\n            width\n            height\n          }\n        }\n        ... on ComponentText {\n          __typename\n          internalName\n          text\n        }\n        ... on Hyperlink {\n          __typename\n          sys {\n            id\n          }\n          link\n          linkName\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query GetProjectData($id: String!) {\n  project(id: $id) {\n    title\n    date\n    sys {\n      id\n    }\n    contentCollection {\n      items {\n        sys {\n          id\n        }\n        ... on ComponentImage {\n          __typename\n          title\n          sys {\n            id\n          }\n          image {\n            title\n            description\n            url\n            width\n            height\n          }\n        }\n        ... on ComponentText {\n          __typename\n          internalName\n          text\n        }\n        ... on Hyperlink {\n          __typename\n          sys {\n            id\n          }\n          link\n          linkName\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProjectDataCollection($limit: Int) {\n  projectCollection(limit: $limit, order: date_DESC) {\n    items {\n      sys {\n        id\n      }\n      title\n      date\n      contentCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            __typename\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query GetProjectDataCollection($limit: Int) {\n  projectCollection(limit: $limit, order: date_DESC) {\n    items {\n      sys {\n        id\n      }\n      title\n      date\n      contentCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            __typename\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetStatusDetails($id: String!) {\n  componentText(id: $id) {\n    text\n  }\n}'
): (typeof documents)['query GetStatusDetails($id: String!) {\n  componentText(id: $id) {\n    text\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetStatusMeta {\n  componentTextCollection {\n    items {\n      sys {\n        id\n      }\n      internalName\n    }\n  }\n}'
): (typeof documents)['query GetStatusMeta {\n  componentTextCollection {\n    items {\n      sys {\n        id\n      }\n      internalName\n    }\n  }\n}']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetTechStack {\n  techStackCollection {\n    items {\n      internalName\n      activeSkillsCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}'
): (typeof documents)['query GetTechStack {\n  techStackCollection {\n    items {\n      internalName\n      activeSkillsCollection {\n        items {\n          sys {\n            id\n          }\n          ... on ComponentText {\n            internalName\n            text\n          }\n        }\n      }\n    }\n  }\n}']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
