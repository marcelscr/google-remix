import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useLocation, Link } from 'remix'

const PaginationButtons = () => {
  const location = useLocation()
  const startIndex =
    Number(new URLSearchParams(location.search).get('start')) || 0
  const query = new URLSearchParams(location.search).get('query')

  return (
    <div className="flex max-w-lg justify-around text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          to={`/search?query=${query}&start=${Math.max(0, startIndex - 10)}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link to={`/search?query=${query}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
