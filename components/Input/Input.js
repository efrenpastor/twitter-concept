import styles from './Input.module.css'

const Input = ({
  type,
  placeholder,
  className,
  onKeyUp,
  onKeyDown,
  onChange,
  error
}) => (
  <div className={className || ''}>
    <input
      type={type || 'text'}
      placeholder={placeholder}
      className={styles.input}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
    {error && <p className={styles.error}>{error}</p>}
  </div>
)

export default Input
