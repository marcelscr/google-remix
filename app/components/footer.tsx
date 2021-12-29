import cn from 'classnames'
import { GlobeIcon } from '@heroicons/react/solid'

import UnderlineLink from './underlineLink'

type Props = {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={cn(
        'grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500',
        className
      )}>
      <div className="px-8 py-3">Brazil</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" /> Carbon neutral since
          2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <UnderlineLink to="/">Advertising</UnderlineLink>
          <UnderlineLink to="/">Business</UnderlineLink>
          <UnderlineLink to="/">How Search works</UnderlineLink>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <UnderlineLink to="/">Privacy</UnderlineLink>
          <UnderlineLink to="/">Terms</UnderlineLink>
          <UnderlineLink to="/">Settings</UnderlineLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
