export interface ContentType {
  id: string
  internalName: string
  text: {
    text: string
  }
  link: string
  linkName: string
}
export interface ItemType {
  node: {
    title: string
    date: string
    content: ContentType[]
  }
}
