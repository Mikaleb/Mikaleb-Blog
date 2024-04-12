export type Item = {
  date: string
  title: string
  company: string
  contractType: string
  description: string
  link: string | null
  isFirst?: boolean
  skills?: string[]
  screenshots?: Screenshot[]
}

export type Screenshot = {
  src: string
  caption: string
  alt: string
}
