import styles from './Profile.module.css'
import { Card } from '../Card'
import Avatar from '../Avatar/Avatar'

const Profile = ({
  avatar,
  fullName,
  username,
  followersCount,
  followingCount
}) => (
  <Card space="none" className={styles.profile}>
    <header className={styles.header}>
      <Avatar className={styles.headerAvatar} src={avatar} text={username} size="l" />
    </header>
    {(fullName || username) && (
      <section className={styles.section}>
        <h4 className={styles.name}>{fullName || ''}</h4>
        <h4 className={styles.username}>@{username || ''}</h4>
      </section>
    )}
    <section className={`${styles.section} ${styles.stats}`}>
      <div className={styles.stat}><strong>{followingCount || 0}</strong> Following</div>
      <div className={styles.stat}><strong>{followersCount || 0}</strong> Followers</div>
    </section>
  </Card>
)

export default Profile
