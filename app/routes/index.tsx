import { Form } from 'remix'
import type { MetaFunction } from 'remix'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

export const meta: MetaFunction = () => {
  return {
    title: 'Google Remix',
    description: "A google clone using Remix and Google's search API."
  }
}

export default function Index() {
  const buttonCn =
    'bg-gray-100 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md'

  return (
    <Form className="p-5 flex flex-col items-center mt-44 flex-grow">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
        alt="google logo"
        height={100}
        width={300}
      />

      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="flex-grow focus:outline-none" />
        <MicrophoneIcon className="h-5 text-gray-600" />
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className={buttonCn}>Google Search</button>
        <button className={buttonCn}>I'm Feeling Lucky</button>
      </div>
    </Form>
  )
}
