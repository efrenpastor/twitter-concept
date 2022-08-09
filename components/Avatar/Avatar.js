import styles from './Avatar.module.css'
import Image from 'next/image'

const Avatar = ({
  src,
  text,
  size,
  className,
  ...props
}) => {
  let wh
  switch (size) {
    case 'xs':
      wh = '28px'
      break
    case 's':
      wh = '40px'
      break
    case 'l':
      wh = '64px'
      break
    case 'xl':
      wh = '80px'
      break
    default:
      wh = '48px'
      break
  }

  if (src) {
    return (
      <Image
        src={src}
        alt={text || ''}
        width={wh}
        height={wh}
        className={`${styles.avatar} ${className || ''}`}
        {...props}
      />
    )
  }

  return (
  <div
    className={`
      ${styles.avatar}
      ${size === 'xs' ? styles.xs : ''}
      ${size === 's' ? styles.s : ''}
      ${size === 'l' ? styles.l : ''}
      ${size === 'xl' ? styles.xl : ''}
      ${className || ''}
    `}
    {...props}
  >
    {text}
  </div>
  )
}

export default Avatar
