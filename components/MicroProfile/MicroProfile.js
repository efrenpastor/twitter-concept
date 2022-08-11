import styles from './MicroProfile.module.css'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

const MicroProfile = ({
  avatar,
  fullName,
  username
}) => (
  <div className={styles.microProfile}>
    <Avatar src={avatar} />
    <p className={styles.info}>
      <strong>{fullName || ''}</strong>
      {username && (
        <>@{username}</>
      )}
    </p>
    <Button className={styles.button}>Follow</Button>
  </div>
)

export default MicroProfile
