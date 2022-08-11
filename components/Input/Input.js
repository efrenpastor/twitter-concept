import styles from './Input.module.css'

const Input = ({
  type,
  placeholder,
  className
}) => (
  <input
    type={type || 'text'}
    placeholder={placeholder}
    className={`${styles.input} ${className || ''}`}
  />
)

export default Input
