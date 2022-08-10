import styles from './MicroProfile.module.css'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

const MicroProfile = ({
  avatar,
  firstName,
  lastName,
  username
}) => (
  <div className={styles.microProfile}>
    <Avatar src={avatar} />
    <p className={styles.info}>
      <strong>{firstName || ''} {lastName || ''}</strong>
      {username && (
        <>@{username}</>
      )}
    </p>
    <Button className={styles.button}>Follow</Button>
  </div>
)

export default MicroProfile
