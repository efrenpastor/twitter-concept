import styles from './Profile.module.css'
import { Card } from '../Card'
import Avatar from '../Avatar/Avatar'

const Profile = ({
  avatar,
  firstName,
  lastName,
  username,
  followerCount,
  followingCount
}) => (
  <Card space="none" className={styles.profile}>
    <header className={styles.header}>
      <Avatar className={styles.headerAvatar} src={avatar} text={username} size="l" />
    </header>
    {(firstName || lastName || username) && (
      <section className={styles.section}>
        <h4 className={styles.name}>{firstName || ''} {lastName || ''}</h4>
        <h4 className={styles.username}>@{username || ''}</h4>
      </section>
    )}
    {(followingCount || followerCount) && (
      <section className={`${styles.section} ${styles.stats}`}>
        {followingCount && (
          <div className={styles.stat}><strong>{followingCount}</strong> Following</div>
        )}
        {followerCount && (
          <div className={styles.stat}><strong>{followerCount}</strong> Followers</div>
        )}
      </section>
    )}
  </Card>
)

export default Profile
