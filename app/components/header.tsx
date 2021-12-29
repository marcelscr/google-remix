import cn from 'classnames'
import { Link } from 'remix'
import { ViewGridIcon } from '@heroicons/react/solid'
import Avatar from './avatar'

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={cn(
        'flex w-full p-5 justify-between text-sm text-gray-700',
        className
      )}>
      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:underline">
          About
        </Link>
        <Link to="/" className="hover:underline">
          Store
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link to="/" className="hover:underline">
          Gmail
        </Link>
        <Link to="/" className="hover:underline">
          Images
        </Link>
        <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://bit.ly/3HjEb7v" />
      </div>
    </header>
  )
}

export default Header
