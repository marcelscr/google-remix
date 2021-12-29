import cn from 'classnames'
import { ViewGridIcon } from '@heroicons/react/solid'

import UnderlineLink from './underlineLink'
import Avatar from './avatar'

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <header
      className={cn(
        'flex justify-end w-full p-5 text-sm text-gray-700',
        className
      )}>
      <div className="flex space-x-4 items-center">
        <UnderlineLink to="/">Gmail</UnderlineLink>
        <UnderlineLink to="/">Images</UnderlineLink>
        <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://bit.ly/3HjEb7v" />
      </div>
    </header>
  )
}

export default Header
