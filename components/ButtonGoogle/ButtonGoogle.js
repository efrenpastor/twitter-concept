import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { Button } from '../Button'

import styles from './ButtonGoogle.module.css'

const ButtonGoogle = () => {
  const signInWithGoogle = async () => {
    await supabaseClient.auth.signIn({
      provider: 'google'
    })
  }

  return (
    <Button
      squared
      className={styles.button}
      onClick={signInWithGoogle}
    >
      <Image
        src="/images/google.svg"
        alt="Sign in with Google"
        width={20}
        height={20}
      />
      Sign in with Google
    </Button>
  )
}

export default ButtonGoogle
