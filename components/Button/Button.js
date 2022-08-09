import styles from './Button.module.css'

const Button = ({
  children,
  secondary,
  squared,
  disabled,
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e) => {
    onClick?.(e)
  }

  return (
    <button
      disabled={disabled}
      className={`
        ${styles.button}
        ${secondary ? styles.secondary : ''}
        ${squared ? styles.squared : ''}
        ${disabled ? styles.disabled : ''}
        ${className || ''}
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
