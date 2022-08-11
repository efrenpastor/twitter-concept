import styles from './Input.module.css'

const Input = ({
  type,
  placeholder,
  className,
  onKeyDown
}) => (
  <input
    type={type || 'text'}
    placeholder={placeholder}
    className={`${styles.input} ${className || ''}`}
    onKeyDown={onKeyDown}
  />
)

export default Input
