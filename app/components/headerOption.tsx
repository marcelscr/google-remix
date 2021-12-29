import cn from 'classnames'

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>
  title: string
  selected?: boolean
}

const HeaderOption = ({ Icon, title, selected }: Props) => {
  return (
    <div
      className={cn(
        'flex pb-2 items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer',
        { 'text-blue-500 border-blue-500': selected }
      )}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  )
}

export default HeaderOption
