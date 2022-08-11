import { useState, useRef, useEffect } from 'react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router'

import styles from './UserMenu.module.css'
import { useUser } from '@supabase/auth-helpers-react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

const UserMenu = () => {
  const router = useRouter()
  const wrappedRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [profile, setProfile] = useState(null)
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .then(({ data }) => {
          setProfile(data[0])
        })
        .catch(console.error)
    }
  }, [user])

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut()
    router.push('/login')
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrappedRef.current && !wrappedRef.current.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrappedRef, isOpen])

  return (
    <div ref={wrappedRef} className={styles.userMenu}>
      <Button size="small" secondary className={styles.button} onClick={handleToggle}>
        <Avatar
          src={profile?.avatar_url || '/images/avatarPlaceholder.jpg'}
          width={25}
          height={25}
        />
        @{profile?.user_name || 'lbednar'}
      </Button>
      <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  )
}

export default UserMenu
