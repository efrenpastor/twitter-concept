import styles from './Tweet.module.css'
import { Card } from '../Card'
import { Avatar } from '../Avatar'

import useDate from '../../hooks/useDate'

const Tweet = ({
  avatar,
  fullName,
  username,
  dateTime,
  content
}) => {
  const { timeSince } = useDate()
  const time = timeSince(new Date(dateTime))

  return (
  <Card className={styles.tweet}>
    <div>
      <Avatar src={avatar} text={fullName} />
    </div>
    <section>
      <div className={styles.userInfo}>
        <p className={styles.name}>{fullName} <span className={styles.username}>@{username}</span></p>
        <time className={styles.dateTime}>{time}</time>
      </div>
      <p>{content}</p>
    </section>
  </Card>
  )
}

export default Tweet
