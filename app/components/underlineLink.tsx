import { Link as RemixLink } from 'remix'
import cn from 'classnames'

type Props = {
  to: string
  className?: string
  children: React.ReactNode
}

function UnderlineLink({ to, className, children }: Props) {
  return (
    <RemixLink to={to} className={cn('hover:underline', className)}>
      {children}
    </RemixLink>
  )
}

export default UnderlineLink
