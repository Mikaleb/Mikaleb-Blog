export type Item = {
  date: string
  title: string
  company: string
  contractType: string
  description: string
  link: string | null
  isFirst?: boolean
  skills?: string[]
  screenshots?: [
    {
      src: string
      alt: string
      caption: string
    }
  ]
}
