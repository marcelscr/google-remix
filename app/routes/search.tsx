import { redirect, useLoaderData } from 'remix'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'

import Header from '~/components/searchHeader'

export const meta: MetaFunction = () => {
  return {
    title: 'Results - Google Remix'
  }
}

type SearchData = {
  query: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')

  return { query }
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
