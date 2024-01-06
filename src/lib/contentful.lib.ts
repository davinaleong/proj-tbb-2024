import contentful from "contentful"
import { type ContentfulLibInterface } from "./interfaces.lib"

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: "cdn.contentful.com",
})

export const ContentfulLib: ContentfulLibInterface = {
  client,
}
