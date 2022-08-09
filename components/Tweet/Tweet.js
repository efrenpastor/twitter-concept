import styles from './Tweet.module.css'
import { Card } from '../Card'
import { Avatar } from '../Avatar'

const Tweet = ({
  avatar,
  firstName,
  lastName,
  username,
  dateTime,
  content
}) => (
  <Card>
    <header className={styles.header}>
      <Avatar src={avatar} text={firstName} />
      <div className={styles.userInfo}>
        <p className={styles.name}>{firstName} {lastName} <span className={styles.username}>@{username}</span></p>
        <time className={styles.dateTime}>{dateTime}</time>
      </div>
    </header>
    <section>
      {content}
    </section>
  </Card>
)

export default Tweet
