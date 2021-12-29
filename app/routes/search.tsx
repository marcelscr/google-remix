import { redirect, useLoaderData } from 'remix'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'

import { searchResponse as mockedResponse } from '~/mocks'
import Header from '~/components/searchHeader'

type SearchData = {
  query: string
  results: object
}

export const meta: MetaFunction = ({ location }) => {
  const search = new URLSearchParams(location.search).get('query') || 'Results'
  return {
    title: `${search} - Google Remix`
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const apiKey = process.env.GOOGLE_API_KEY
  if (!apiKey) {
    throw new Error('Missing Google API Key')
  }

  const contextKey = process.env.GOOGLE_CONTEXT_KEY
  if (!contextKey) {
    throw new Error('Missing Google Context Key')
  }

  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  const startIndex = url.searchParams.get('start') || 0
  const useDummyData = true

  const results = useDummyData
    ? mockedResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${query}&start=${startIndex}`
      ).then(response => response.json())

  return { query, results }
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const query = formData.get('query')

  if (!query) return null

  return redirect(`/search?query=${query}`)
}

export default function Search() {
  const data = useLoaderData<SearchData>()

  console.log(data)

  return (
    <div>
      <Header defaultSearchValue={data.query} />
    </div>
  )
}
