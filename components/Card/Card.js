import styles from './Card.module.css'

const Card = ({
  children,
  space,
  className,
  ...props
}) => (
  <div
    className={`
      ${styles.card}
      ${space === 'none' ? styles.blood : ''}
      ${className || ''}
    `}
    {...props}
  >
    {children}
  </div>
)

export default Card
