import { redirect } from 'remix'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'

import Header from '~/components/searchHeader'

export const meta: MetaFunction = () => {
  return {
    title: 'Results - Google Remix'
  }
}

export const loader: LoaderFunction = async () => {
  return {}
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const query = formData.get('query')

  if (!query) return null

  return redirect(`/search?query=${query}`)
}

export default function Search() {
  return (
    <div>
      <Header />
    </div>
  )
}
