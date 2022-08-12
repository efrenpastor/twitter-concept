import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'

import useProfile from '../../hooks/useProfile'
import useFollowers from '../../hooks/useFollowers'

import styles from './MicroProfile.module.css'

const MicroProfile = ({
  id,
  avatar,
  fullName,
  username,
  following,
  onSelect,
  onUnselect,
  onFollow = () => {},
  onUnfollow = () => {}
}) => {
  const { profile } = useProfile()
  const { follow, unfollow } = useFollowers()
  const [selected, setSelected] = useState(false)

  const handleFollow = async (e) => {
    e.stopPropagation()
    try {
      await follow(profile.id, id)
      onFollow()
    } catch (error) {
      console.error(error)
    }
  }

  const handleUnfollow = async (e) => {
    e.stopPropagation()
    try {
      await unfollow(profile.id, id)
      onUnfollow()
    } catch (error) {
      console.error(error)
    }
  }

  const handleSelect = (id) => {
    if (typeof onSelect !== 'function' || typeof onUnselect !== 'function') return null

    selected ? onUnselect(id) : onSelect(id)
    setSelected(!selected)
  }

  return (
    <div
      className={`
        ${styles.microProfile}
        ${selected ? styles.selected : ''}
        ${typeof onSelect === 'function' ? styles.selectable : ''}
      `}
      onClick={() => handleSelect(id)}
    >
      <div className={styles.avatar}>
        <Avatar src={avatar} />
      </div>
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
