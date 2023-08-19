/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  componentImageCollection?: Maybe<ComponentImageCollection>
  entryCollection?: Maybe<EntryCollection>
  mainBannerCollection?: Maybe<MainBannerCollection>
}

export type AssetLinkingCollectionsComponentImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsComponentImageCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsMainBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsMainBannerCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetLinkingCollectionsComponentImageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum AssetLinkingCollectionsMainBannerCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MainTitleAsc = 'mainTitle_ASC',
  MainTitleDesc = 'mainTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentImage) */
export type ComponentImage = Entry & {
  __typename?: 'ComponentImage'
  contentfulMetadata: ContentfulMetadata
  image?: Maybe<Asset>
  linkedFrom?: Maybe<ComponentImageLinkingCollections>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentImage) */
export type ComponentImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentImage) */
export type ComponentImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentImage) */
export type ComponentImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ComponentImageCollection = {
  __typename?: 'ComponentImageCollection'
  items: Array<Maybe<ComponentImage>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ComponentImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentImageFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ComponentImageFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  image_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentImageLinkingCollections = {
  __typename?: 'ComponentImageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ComponentImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ComponentImageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentText) */
export type ComponentText = Entry & {
  __typename?: 'ComponentText'
  contentfulMetadata: ContentfulMetadata
  internalName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<ComponentTextLinkingCollections>
  sys: Sys
  text?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentText) */
export type ComponentTextInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentText) */
export type ComponentTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/componentText) */
export type ComponentTextTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ComponentTextCollection = {
  __typename?: 'ComponentTextCollection'
  items: Array<Maybe<ComponentText>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ComponentTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ComponentTextFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalName?: InputMaybe<Scalars['String']['input']>
  internalName_contains?: InputMaybe<Scalars['String']['input']>
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  internalName_not?: InputMaybe<Scalars['String']['input']>
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  sys?: InputMaybe<SysFilter>
  text?: InputMaybe<Scalars['String']['input']>
  text_contains?: InputMaybe<Scalars['String']['input']>
  text_exists?: InputMaybe<Scalars['Boolean']['input']>
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  text_not?: InputMaybe<Scalars['String']['input']>
  text_not_contains?: InputMaybe<Scalars['String']['input']>
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ComponentTextLinkingCollections = {
  __typename?: 'ComponentTextLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ComponentTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ComponentTextOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/hyperlink) */
export type Hyperlink = Entry & {
  __typename?: 'Hyperlink'
  contentfulMetadata: ContentfulMetadata
  link?: Maybe<Scalars['String']['output']>
  linkName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<HyperlinkLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/hyperlink) */
export type HyperlinkLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/hyperlink) */
export type HyperlinkLinkNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/hyperlink) */
export type HyperlinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type HyperlinkCollection = {
  __typename?: 'HyperlinkCollection'
  items: Array<Maybe<Hyperlink>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type HyperlinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<HyperlinkFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HyperlinkFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  link?: InputMaybe<Scalars['String']['input']>
  linkName?: InputMaybe<Scalars['String']['input']>
  linkName_contains?: InputMaybe<Scalars['String']['input']>
  linkName_exists?: InputMaybe<Scalars['Boolean']['input']>
  linkName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  linkName_not?: InputMaybe<Scalars['String']['input']>
  linkName_not_contains?: InputMaybe<Scalars['String']['input']>
  linkName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_contains?: InputMaybe<Scalars['String']['input']>
  link_exists?: InputMaybe<Scalars['Boolean']['input']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_not?: InputMaybe<Scalars['String']['input']>
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type HyperlinkLinkingCollections = {
  __typename?: 'HyperlinkLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type HyperlinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum HyperlinkOrder {
  LinkNameAsc = 'linkName_ASC',
  LinkNameDesc = 'linkName_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBanner = Entry & {
  __typename?: 'MainBanner'
  contentfulMetadata: ContentfulMetadata
  image?: Maybe<Asset>
  internalName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<MainBannerLinkingCollections>
  mainTitle?: Maybe<Scalars['String']['output']>
  subTitle?: Maybe<Scalars['String']['output']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBannerMainTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/mainBanner) */
export type MainBannerSubTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type MainBannerCollection = {
  __typename?: 'MainBannerCollection'
  items: Array<Maybe<MainBanner>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type MainBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<MainBannerFilter>>>
  OR?: InputMaybe<Array<InputMaybe<MainBannerFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  image_exists?: InputMaybe<Scalars['Boolean']['input']>
  internalName?: InputMaybe<Scalars['String']['input']>
  internalName_contains?: InputMaybe<Scalars['String']['input']>
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  internalName_not?: InputMaybe<Scalars['String']['input']>
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  mainTitle?: InputMaybe<Scalars['String']['input']>
  mainTitle_contains?: InputMaybe<Scalars['String']['input']>
  mainTitle_exists?: InputMaybe<Scalars['Boolean']['input']>
  mainTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  mainTitle_not?: InputMaybe<Scalars['String']['input']>
  mainTitle_not_contains?: InputMaybe<Scalars['String']['input']>
  mainTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  subTitle?: InputMaybe<Scalars['String']['input']>
  subTitle_contains?: InputMaybe<Scalars['String']['input']>
  subTitle_exists?: InputMaybe<Scalars['Boolean']['input']>
  subTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  subTitle_not?: InputMaybe<Scalars['String']['input']>
  subTitle_not_contains?: InputMaybe<Scalars['String']['input']>
  subTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type MainBannerLinkingCollections = {
  __typename?: 'MainBannerLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type MainBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum MainBannerOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MainTitleAsc = 'mainTitle_ASC',
  MainTitleDesc = 'mainTitle_DESC',
  SubTitleAsc = 'subTitle_ASC',
  SubTitleDesc = 'subTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableItem) */
export type NotableItem = Entry & {
  __typename?: 'NotableItem'
  contentfulMetadata: ContentfulMetadata
  label?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<NotableItemLinkingCollections>
  notableListItem?: Maybe<Scalars['String']['output']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableItem) */
export type NotableItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableItem) */
export type NotableItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableItem) */
export type NotableItemNotableListItemArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type NotableItemCollection = {
  __typename?: 'NotableItemCollection'
  items: Array<Maybe<NotableItem>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type NotableItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotableItemFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NotableItemFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  label?: InputMaybe<Scalars['String']['input']>
  label_contains?: InputMaybe<Scalars['String']['input']>
  label_exists?: InputMaybe<Scalars['Boolean']['input']>
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  label_not?: InputMaybe<Scalars['String']['input']>
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notableListItem?: InputMaybe<Scalars['String']['input']>
  notableListItem_contains?: InputMaybe<Scalars['String']['input']>
  notableListItem_exists?: InputMaybe<Scalars['Boolean']['input']>
  notableListItem_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  notableListItem_not?: InputMaybe<Scalars['String']['input']>
  notableListItem_not_contains?: InputMaybe<Scalars['String']['input']>
  notableListItem_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  sys?: InputMaybe<SysFilter>
}

export type NotableItemLinkingCollections = {
  __typename?: 'NotableItemLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type NotableItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum NotableItemOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NotableListItemAsc = 'notableListItem_ASC',
  NotableListItemDesc = 'notableListItem_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableWork) */
export type NotableWork = Entry & {
  __typename?: 'NotableWork'
  contentfulMetadata: ContentfulMetadata
  internalName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<NotableWorkLinkingCollections>
  notableWorkListCollection?: Maybe<NotableWorkNotableWorkListCollection>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableWork) */
export type NotableWorkInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableWork) */
export type NotableWorkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/notableWork) */
export type NotableWorkNotableWorkListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type NotableWorkCollection = {
  __typename?: 'NotableWorkCollection'
  items: Array<Maybe<NotableWork>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type NotableWorkFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotableWorkFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NotableWorkFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalName?: InputMaybe<Scalars['String']['input']>
  internalName_contains?: InputMaybe<Scalars['String']['input']>
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  internalName_not?: InputMaybe<Scalars['String']['input']>
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  notableWorkListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type NotableWorkLinkingCollections = {
  __typename?: 'NotableWorkLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type NotableWorkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type NotableWorkNotableWorkListCollection = {
  __typename?: 'NotableWorkNotableWorkListCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export enum NotableWorkOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project'
  contentCollection?: Maybe<ProjectContentCollection>
  contentfulMetadata: ContentfulMetadata
  date?: Maybe<Scalars['DateTime']['output']>
  linkedFrom?: Maybe<ProjectLinkingCollections>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/project) */
export type ProjectContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/project) */
export type ProjectDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ProjectCollection = {
  __typename?: 'ProjectCollection'
  items: Array<Maybe<Project>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProjectContentCollection = {
  __typename?: 'ProjectContentCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  date?: InputMaybe<Scalars['DateTime']['input']>
  date_exists?: InputMaybe<Scalars['Boolean']['input']>
  date_gt?: InputMaybe<Scalars['DateTime']['input']>
  date_gte?: InputMaybe<Scalars['DateTime']['input']>
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  date_lt?: InputMaybe<Scalars['DateTime']['input']>
  date_lte?: InputMaybe<Scalars['DateTime']['input']>
  date_not?: InputMaybe<Scalars['DateTime']['input']>
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ProjectOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  componentImage?: Maybe<ComponentImage>
  componentImageCollection?: Maybe<ComponentImageCollection>
  componentText?: Maybe<ComponentText>
  componentTextCollection?: Maybe<ComponentTextCollection>
  entryCollection?: Maybe<EntryCollection>
  hyperlink?: Maybe<Hyperlink>
  hyperlinkCollection?: Maybe<HyperlinkCollection>
  mainBanner?: Maybe<MainBanner>
  mainBannerCollection?: Maybe<MainBannerCollection>
  notableItem?: Maybe<NotableItem>
  notableItemCollection?: Maybe<NotableItemCollection>
  notableWork?: Maybe<NotableWork>
  notableWorkCollection?: Maybe<NotableWorkCollection>
  project?: Maybe<Project>
  projectCollection?: Maybe<ProjectCollection>
  techStack?: Maybe<TechStack>
  techStackCollection?: Maybe<TechStackCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryComponentImageArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryComponentImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ComponentImageOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ComponentImageFilter>
}

export type QueryComponentTextArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryComponentTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ComponentTextOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ComponentTextFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryHyperlinkArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryHyperlinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<HyperlinkOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HyperlinkFilter>
}

export type QueryMainBannerArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryMainBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<MainBannerOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MainBannerFilter>
}

export type QueryNotableItemArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryNotableItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<NotableItemOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NotableItemFilter>
}

export type QueryNotableWorkArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryNotableWorkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<NotableWorkOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NotableWorkFilter>
}

export type QueryProjectArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectFilter>
}

export type QueryTechStackArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryTechStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<TechStackOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechStackFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/techStack) */
export type TechStack = Entry & {
  __typename?: 'TechStack'
  activeSkillsCollection?: Maybe<TechStackActiveSkillsCollection>
  contentfulMetadata: ContentfulMetadata
  internalName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<TechStackLinkingCollections>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/techStack) */
export type TechStackActiveSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/techStack) */
export type TechStackInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/qyxj595mgdfb/content_types/techStack) */
export type TechStackLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type TechStackActiveSkillsCollection = {
  __typename?: 'TechStackActiveSkillsCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type TechStackCollection = {
  __typename?: 'TechStackCollection'
  items: Array<Maybe<TechStack>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type TechStackFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechStackFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TechStackFilter>>>
  activeSkillsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  internalName?: InputMaybe<Scalars['String']['input']>
  internalName_contains?: InputMaybe<Scalars['String']['input']>
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  internalName_not?: InputMaybe<Scalars['String']['input']>
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>
  internalName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  sys?: InputMaybe<SysFilter>
}

export type TechStackLinkingCollections = {
  __typename?: 'TechStackLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type TechStackLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum TechStackOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type GetHeroDetailsQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetHeroDetailsQuery = {
  __typename?: 'Query'
  mainBanner?: {
    __typename?: 'MainBanner'
    mainTitle?: string | null
    subTitle?: string | null
    image?: {
      __typename?: 'Asset'
      height?: number | null
      width?: number | null
      description?: string | null
      fileName?: string | null
      url?: string | null
    } | null
  } | null
}

export type GetHeroMetaQueryVariables = Exact<{ [key: string]: never }>

export type GetHeroMetaQuery = {
  __typename?: 'Query'
  mainBannerCollection?: {
    __typename?: 'MainBannerCollection'
    items: Array<{
      __typename?: 'MainBanner'
      sys: { __typename?: 'Sys'; id: string }
    } | null>
  } | null
}

export type GetNotableWorkQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetNotableWorkQuery = {
  __typename?: 'Query'
  notableWork?: {
    __typename?: 'NotableWork'
    internalName?: string | null
    notableWorkListCollection?: {
      __typename?: 'NotableWorkNotableWorkListCollection'
      items: Array<
        | {
            __typename?: 'ComponentImage'
            sys: { __typename?: 'Sys'; id: string }
          }
        | {
            __typename?: 'ComponentText'
            sys: { __typename?: 'Sys'; id: string }
          }
        | { __typename?: 'Hyperlink'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'MainBanner'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'NotableItem'
            label?: string | null
            notableListItem?: string | null
            sys: { __typename?: 'Sys'; id: string }
          }
        | {
            __typename?: 'NotableWork'
            sys: { __typename?: 'Sys'; id: string }
          }
        | { __typename?: 'Project'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'TechStack'; sys: { __typename?: 'Sys'; id: string } }
        | null
      >
    } | null
  } | null
}

export type GetNotableWorkCollectionQueryVariables = Exact<{
  [key: string]: never
}>

export type GetNotableWorkCollectionQuery = {
  __typename?: 'Query'
  notableWorkCollection?: {
    __typename?: 'NotableWorkCollection'
    items: Array<{
      __typename?: 'NotableWork'
      sys: { __typename?: 'Sys'; id: string }
    } | null>
  } | null
}

export type GetProjectDataQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetProjectDataQuery = {
  __typename?: 'Query'
  project?: {
    __typename?: 'Project'
    title?: string | null
    date?: any | null
    sys: { __typename?: 'Sys'; id: string }
    contentCollection?: {
      __typename?: 'ProjectContentCollection'
      items: Array<
        | {
            __typename: 'ComponentImage'
            title?: string | null
            sys: { __typename?: 'Sys'; id: string }
            image?: {
              __typename?: 'Asset'
              title?: string | null
              description?: string | null
              url?: string | null
              width?: number | null
              height?: number | null
            } | null
          }
        | {
            __typename: 'ComponentText'
            internalName?: string | null
            text?: string | null
            sys: { __typename?: 'Sys'; id: string }
          }
        | {
            __typename: 'Hyperlink'
            link?: string | null
            linkName?: string | null
            sys: { __typename?: 'Sys'; id: string }
          }
        | { __typename?: 'MainBanner'; sys: { __typename?: 'Sys'; id: string } }
        | {
            __typename?: 'NotableItem'
            sys: { __typename?: 'Sys'; id: string }
          }
        | {
            __typename?: 'NotableWork'
            sys: { __typename?: 'Sys'; id: string }
          }
        | { __typename?: 'Project'; sys: { __typename?: 'Sys'; id: string } }
        | { __typename?: 'TechStack'; sys: { __typename?: 'Sys'; id: string } }
        | null
      >
    } | null
  } | null
}

export type GetProjectDataCollectionQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
}>

export type GetProjectDataCollectionQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectCollection'
    items: Array<{
      __typename?: 'Project'
      title?: string | null
      date?: any | null
      sys: { __typename?: 'Sys'; id: string }
      contentCollection?: {
        __typename?: 'ProjectContentCollection'
        items: Array<
          | {
              __typename: 'ComponentImage'
              image?: {
                __typename?: 'Asset'
                title?: string | null
                description?: string | null
                url?: string | null
                width?: number | null
                height?: number | null
              } | null
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'ComponentText'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'Hyperlink'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'MainBanner'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'NotableItem'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'NotableWork'
              sys: { __typename?: 'Sys'; id: string }
            }
          | { __typename?: 'Project'; sys: { __typename?: 'Sys'; id: string } }
          | {
              __typename?: 'TechStack'
              sys: { __typename?: 'Sys'; id: string }
            }
          | null
        >
      } | null
    } | null>
  } | null
}

export type GetStatusDetailsQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetStatusDetailsQuery = {
  __typename?: 'Query'
  componentText?: { __typename?: 'ComponentText'; text?: string | null } | null
}

export type GetStatusMetaQueryVariables = Exact<{ [key: string]: never }>

export type GetStatusMetaQuery = {
  __typename?: 'Query'
  componentTextCollection?: {
    __typename?: 'ComponentTextCollection'
    items: Array<{
      __typename?: 'ComponentText'
      internalName?: string | null
      sys: { __typename?: 'Sys'; id: string }
    } | null>
  } | null
}

export type GetTechStackQueryVariables = Exact<{ [key: string]: never }>

export type GetTechStackQuery = {
  __typename?: 'Query'
  techStackCollection?: {
    __typename?: 'TechStackCollection'
    items: Array<{
      __typename?: 'TechStack'
      internalName?: string | null
      activeSkillsCollection?: {
        __typename?: 'TechStackActiveSkillsCollection'
        items: Array<
          | {
              __typename?: 'ComponentImage'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'ComponentText'
              internalName?: string | null
              text?: string | null
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'Hyperlink'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'MainBanner'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'NotableItem'
              sys: { __typename?: 'Sys'; id: string }
            }
          | {
              __typename?: 'NotableWork'
              sys: { __typename?: 'Sys'; id: string }
            }
          | { __typename?: 'Project'; sys: { __typename?: 'Sys'; id: string } }
          | {
              __typename?: 'TechStack'
              sys: { __typename?: 'Sys'; id: string }
            }
          | null
        >
      } | null
    } | null>
  } | null
}

export const GetHeroDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHeroDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mainBanner' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mainTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subTitle' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'height' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fileName' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetHeroDetailsQuery, GetHeroDetailsQueryVariables>
export const GetHeroMetaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetHeroMeta' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'mainBannerCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetHeroMetaQuery, GetHeroMetaQueryVariables>
export const GetNotableWorkDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNotableWork' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'notableWork' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'internalName' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'notableWorkListCollection' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sys' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'NotableItem' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'label' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'notableListItem',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNotableWorkQuery, GetNotableWorkQueryVariables>
export const GetNotableWorkCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetNotableWorkCollection' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'notableWorkCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNotableWorkCollectionQuery,
  GetNotableWorkCollectionQueryVariables
>
export const GetProjectDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjectData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'project' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sys' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentCollection' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sys' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'ComponentImage' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sys' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'title',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'description',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'url' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'width',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'height',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'ComponentText' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'internalName',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'text' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'Hyperlink' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: '__typename' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sys' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'link' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'linkName' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProjectDataQuery, GetProjectDataQueryVariables>
export const GetProjectDataCollectionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProjectDataCollection' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'projectCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'order' },
                value: { kind: 'EnumValue', value: 'date_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'contentCollection' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'limit' },
                            value: { kind: 'IntValue', value: '1' },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sys' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'ComponentImage',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: '__typename',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'image',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'title',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'description',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'url',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'width',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'height',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProjectDataCollectionQuery,
  GetProjectDataCollectionQueryVariables
>
export const GetStatusDetailsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStatusDetails' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'componentText' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'text' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetStatusDetailsQuery,
  GetStatusDetailsQueryVariables
>
export const GetStatusMetaDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetStatusMeta' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'componentTextCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sys' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'internalName' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStatusMetaQuery, GetStatusMetaQueryVariables>
export const GetTechStackDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTechStack' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'techStackCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'internalName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activeSkillsCollection' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sys' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'id' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'ComponentText',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'internalName',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'text' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTechStackQuery, GetTechStackQueryVariables>
