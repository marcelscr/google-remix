import { Form, Link } from 'remix'
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import { useRef } from 'react'

import Avatar from './avatar'
import HeaderOptions from './headerOptions'

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
            alt="google logo"
            height={40}
            width={120}
          />
        </Link>
        <Form
          method="post"
          action="/search"
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={inputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            name="query"
            id="query"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = ''
              }
            }}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit">
            Search
          </button>
        </Form>
        <Avatar className="ml-auto" url="https://bit.ly/3HjEb7v" />
      </div>

      <HeaderOptions />
    </header>
  )
}

export default Header
