import { redirect } from 'remix'
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix'

import Header from '~/components/searchHeader'

export const meta: MetaFunction = () => {
  return {
    title: 'Results - Google Remix'
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return {}
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const query = formData.get('query')

  if (!query) return null

  return redirect(`/search?query=${query}`)
}

export default function Search() {
  const buttonCn =
    'bg-gray-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md'

  return (
    <div>
      <Header />
    </div>
  )
}
