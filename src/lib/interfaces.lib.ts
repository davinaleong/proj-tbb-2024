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
