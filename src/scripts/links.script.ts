import type { LinkInterface } from "../lib/interfaces.lib"

import { client } from "../lib/contentful.lib"
import { type PostInterface } from "../lib/interfaces.lib"

const { CONTENTFUL_TYPE_ID } = import.meta.env
const latestEntries = await client.getEntries<PostInterface>({
  content_type: CONTENTFUL_TYPE_ID,
  order: ["-fields.publishedAt"],
  limit: 1,
})

const featuredEntries = await client.getEntries<PostInterface>({
  content_type: CONTENTFUL_TYPE_ID,
  order: ["-fields.publishedAt"],
  "fields.featured": true,
  limit: 1,
})

const latest = latestEntries.items[0]
const featured = featuredEntries.items[0]

export const homeLink: LinkInterface = {
  title: "Home",
  url: "/",
}

export const aboutLink: LinkInterface = {
  title: "Unravel tBB",
  url: "/unravel/",
}

export const featuredScrollLink: LinkInterface = {
  title: "Featured Scroll",
  url: `/scrolls/${featured.fields.slug}`,
}

export const lastestScrollLink: LinkInterface = {
  title: "Latest Scroll",
  url: `/scrolls/${latest.fields.slug}`,
}

export const archiveLink: LinkInterface = {
  title: "Scroll Bottles",
  url: "/scroll-bottles/",
}

export const subscribeLink: LinkInterface = {
  title: "Subscribe Scroll",
  url: "/subscribe/",
}

export const contactLink: LinkInterface = {
  title: "Contact Scroll",
  url: "/contact/",
}

export const privacyLink: LinkInterface = {
  title: "Privacy Policy",
  url: "/privacy-policy/",
}

export const headerLinks: LinkInterface[] = [
  homeLink,
  featuredScrollLink,
  lastestScrollLink,
  archiveLink,
]

export const footerLinks: LinkInterface[] = [
  homeLink,
  aboutLink,
  featuredScrollLink,
  lastestScrollLink,
  archiveLink,
  contactLink,
  // subscribeLink,
  // privacyLink,
]

export const links: LinkInterface[] = [...headerLinks, ...footerLinks]
