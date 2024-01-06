import type { LinkInterface } from "../lib/interfaces.lib"

export const homeLink: LinkInterface = {
  title: "Home",
  url: "/",
}

export const aboutLink: LinkInterface = {
  title: "Unravel tBB",
  url: "/unravel/",
}

export const lastestScrollLink: LinkInterface = {
  title: "Latest Scroll",
  url: "/scrolls/",
}

export const archiveLink: LinkInterface = {
  title: "Scroll Bottles",
  url: "/scroll-bottles/",
}

export const headerLinks: LinkInterface[] = [
  homeLink,
  aboutLink,
  lastestScrollLink,
  archiveLink,
]
