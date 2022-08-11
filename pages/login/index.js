import { useUser } from '@supabase/auth-helpers-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { ButtonGoogle } from '../../components/ButtonGoogle'
import { Card } from '../../components/Card'

import styles from './index.module.css'
import Image from 'next/image'

const LoginPage = () => {
  const { user, error } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push('/')
  }, [user, router])

  return (
    <main className={styles.layout}>
      <Card className={styles.login}>
        <div className={styles.logo}>
          <Image
            src="/images/twitter.svg"
            alt="Twitter"
            width={50}
            height={50}
          />
        </div>
        <h1 className={styles.title}>What&apos;s happening now</h1>
        <h2 className={styles.subtitle}>Join Twitter today</h2>
        {error && <p>{error.message}</p>}
        <ButtonGoogle />
        <small className={styles.legal}>By registering, you agree to the Terms of Service and Privacy Policy, including the Use of Cookies policy.</small>
      </Card>
    </main>
  )
}

export default LoginPage
