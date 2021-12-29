import cn from 'classnames'

type Props = {
  children: React.ReactNode
}

const ErrorWrapper = ({ children }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center h-full p-8'
      )}>
      {children}
    </div>
  )
}

export default ErrorWrapper
