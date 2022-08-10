import styles from './Input.module.css'

const Input = ({
  type,
  placeholder
}) => {
  console.log('placeholder', placeholder)
  return (
  <input
    type={type || 'text'}
    placeholder={placeholder}
    className={styles.input}
  />
  )
}

export default Input
