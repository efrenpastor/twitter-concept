import styles from './MicroProfile.module.css'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

import useProfile from '../../hooks/useProfile'
import useFollowers from '../../hooks/useFollowers'

const MicroProfile = ({
  avatar,
  fullName,
  username,
  following,
  onFollow = () => {},
  onUnfollow = () => {},
  id
}) => {
  const { profile } = useProfile()
  const { follow, unfollow } = useFollowers()

  const handleFollow = async () => {
    try {
      await follow(profile.id, id)
      onFollow()
    } catch (error) {
      console.error(error)
    }
  }

  const handleUnfollow = async () => {
    try {
      await unfollow(profile.id, id)
      onUnfollow()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.microProfile}>
      <Avatar src={avatar} />
      <p className={styles.info}>
        <strong>{fullName || ''}</strong>
        {username && (
          <>@{username}</>
        )}
      </p>
      {id && profile && (
        <Button className={styles.button} onClick={following ? handleUnfollow : handleFollow}>{following ? 'Unfollow' : 'Follow'}</Button>
      )}
    </div>
  )
}

export default MicroProfile
