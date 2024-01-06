import type { LinkInterface } from "../lib/interfaces.lib"

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
  url: "/scrolls/",
}

export const lastestScrollLink: LinkInterface = {
  title: "Latest Scroll",
  url: "/scrolls/",
}

export const archiveLink: LinkInterface = {
  title: "Scroll Bottles",
  url: "/scroll-bottles/",
}

export const subscribeLink: LinkInterface = {
  title: "Subscribe",
  url: "/subscribe/",
}

export const privacyLink: LinkInterface = {
  title: "Privacy Policy",
  url: "/privacy-policy/",
}

export const headerLinks: LinkInterface[] = [
  homeLink,
  aboutLink,
  lastestScrollLink,
  archiveLink,
]

export const footerLinks: LinkInterface[] = [
  homeLink,
  aboutLink,
  featuredScrollLink,
  lastestScrollLink,
  archiveLink,
  subscribeLink,
  privacyLink,
]

export const links: LinkInterface[] = [...headerLinks, ...footerLinks]
