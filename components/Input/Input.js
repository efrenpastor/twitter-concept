import styles from './Input.module.css'

const Input = ({
  type,
  placeholder,
  className
}) => {
  console.log('placeholder', placeholder)
  return (
  <input
    type={type || 'text'}
    placeholder={placeholder}
    className={`${styles.input} ${className || ''}`}
  />
  )
}

export default Input
