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

export interface OptionsInterface {
  method: string
  headers: any
  body: string
}

export interface CmsLibInterface {
  METHOD_GET: string
  METHOD_POST: string
  MESSAGE_TYPE_URL: string
  MESSAGE_URL: string
  SUBSCRIBER_URL: string
  options(body: any, method: string, headers?: any): OptionsInterface
  fetchMessageTypes(): Promise<any>
  fetchMessages(body: any): Promise<any>
  fetchSubscribers(body: any): Promise<any>
}

export interface CmsLibMessageTypeInterface {
  id: number
  name: string
  title: string
  value: string
  sortOrder: number
}
