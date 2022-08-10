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
  <Card className={styles.tweet}>
    <div>
      <Avatar src={avatar} text={firstName} />
    </div>
    <section>
      <div className={styles.userInfo}>
        <p className={styles.name}>{firstName} {lastName} <span className={styles.username}>@{username}</span></p>
        <time className={styles.dateTime}>{dateTime}</time>
      </div>
      <p>{content}</p>
    </section>
  </Card>
)

export default Tweet
