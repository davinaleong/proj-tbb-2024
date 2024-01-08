import { type Entry, type EntryFieldTypes } from "contentful"

export interface LinkInterface {
  title: string
  url: string
  target?: string
}

export interface FrontmatterInterface {
  title: string
}

export interface PageFrontmatterInterface extends FrontmatterInterface {
  subtitle: string
  description: string
  keywords: string
}

export interface IndexPageFrontmatterInterface
  extends PageFrontmatterInterface {
  featuredSlug: string
  subscription: boolean
}

export interface ScriptInterface {
  chunkArray<T>(array: T[], chunkSize: number): T[][]
}

export interface UtilsScriptInterface extends ScriptInterface {
  chunkArray<T>(array: T[], chunkSize: number): T[][]
}

export interface ContentfulLibInterface {
  client: any
}

export type PostType = Entry<PostInterface>

export interface PostInterface {
  contentTypeId: string
  fields: PostFieldsInterface
  order?: string[]
  limit?: number
}

export interface PostFieldsInterface {
  title: EntryFieldTypes.Text
  slug: EntryFieldTypes.Text
  keywords: EntryFieldTypes.Text
  subtitle: EntryFieldTypes.Text
  excerpt: EntryFieldTypes.Text
  body: EntryFieldTypes.Text
  publishedAt: EntryFieldTypes.Date
  featured: EntryFieldTypes.Boolean
}

export interface PostGroupInterface {
  year: string | number
  posts: Entry<PostInterface>[]
}
