export type Results = {
  searchInformation: {
    formattedTotalResults: string
    formattedSearchTime: string
    totalResults: string
  }
  items: [
    {
      link: string
      title: string
      snippet: string
      formattedUrl: string
    }
  ]
}
