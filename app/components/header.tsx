import cn from 'classnames'
import { Link } from 'remix'

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
      </div>
    </header>
  )
}

export default Header