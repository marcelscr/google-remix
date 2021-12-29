import { Form, redirect } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

export const meta: MetaFunction = () => {
  return {
    title: 'Google Remix',
    description: "A google clone using Remix and Google's search API."
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  return {}
}

export default function Search() {
  const buttonCn =
    'bg-gray-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md'

  return <h1>Search page</h1>
}
