import styles from './Button.module.css'

const Button = ({
  children,
  secondary,
  squared,
  disabled,
  className,
  onClick,
  size,
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
        ${size ? styles[size] : ''}
        ${className || ''}
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
