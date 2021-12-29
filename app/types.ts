export type Results = {
  searchInformation?: {
    formattedTotalResults: number
    formattedSearchTime: number
  }
  items?: [
    {
      link: string
      title: string
      snippet: string
      formattedUrl: string
    }
  ]
}
