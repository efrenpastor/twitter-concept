import styles from './Tweet.module.css'
import { Card } from '../Card'
import { Avatar } from '../Avatar'

const Tweet = ({
  avatar,
  fullName,
  username,
  dateTime,
  content
}) => (
  <Card className={styles.tweet}>
    <div>
      <Avatar src={avatar} text={fullName} />
    </div>
    <section>
      <div className={styles.userInfo}>
        <p className={styles.name}>{fullName} <span className={styles.username}>@{username}</span></p>
        <time className={styles.dateTime}>{dateTime}</time>
      </div>
      <p>{content}</p>
    </section>
  </Card>
)

export default Tweet
