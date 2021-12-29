import classNames from 'classnames'
import cn from 'classnames'

type Props = {
  url?: string
  className?: string
}

const Avatar = ({ url, className }: Props) => {
  return (
    <img
      loading="lazy"
      className={cn(
        'h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110',
        className
      )}
      src={url}
      alt="profile avatar"
    />
  )
}

export default Avatar
