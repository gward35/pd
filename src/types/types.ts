export interface DataType {
  headers: string[]
  rows: Data[]
}

export interface Data {
  title: string
  dateFound: string
  risk: string
  affectedAssets: number
  status: string
  tags: string[]
}
