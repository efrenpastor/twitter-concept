import styles from './index.module.css'

import { useUser } from '@supabase/auth-helpers-react'
import { withPageAuth, supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Card } from '../components/Card'
import { Profile } from '../components/Profile'
import { CreateTweet } from '../components/CreateTweet'
import { Tweet } from '../components/Tweet'
import { MicroProfile } from '../components/MicroProfile'

const Home = () => {
  const { user } = useUser()
  const router = useRouter()
  console.log('user', user)

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut()
    router.push('/login')
  }

  return (
    <div>
      <Head>
        <title>Twitter Concept</title>
        <meta name="description" content="Twitter Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={handleSignOut}>Sign out</button>

      <main className={styles.layout}>
        <section>
          <Profile
            avatar="/images/avatarPlaceholder.jpg"
            username="lbednar"
            firstName="Lorena"
            lastName="Bednar"
          />
          <Card className="grid gap-6">
            <p className='font-semibold'>Following</p>
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
          </Card>
          <Card className="grid gap-6">
            <p className='font-semibold'>Following</p>
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
            <MicroProfile avatar="/images/avatarPlaceholder.jpg" username="lbednar" firstName="Lorena" lastName="Bednar" />
          </Card>
        </section>
        <section>
          <CreateTweet avatar="/images/avatarPlaceholder.jpg" />
          <Tweet
            avatar="/images/avatarPlaceholder.jpg"
            username="lbednar"
            firstName="Lorena"
            lastName="Bednar"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            dateTime="2020-01-01 16:00:00"
          />
          <Tweet
            avatar="/images/avatarPlaceholder.jpg"
            username="lbednar"
            firstName="Lorena"
            lastName="Bednar"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            dateTime="2020-01-01 16:00:00"
          />
          <Tweet
            avatar="/images/avatarPlaceholder.jpg"
            username="lbednar"
            firstName="Lorena"
            lastName="Bednar"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            dateTime="2020-01-01 16:00:00"
          />
          <Tweet
            avatar="/images/avatarPlaceholder.jpg"
            username="lbednar"
            firstName="Lorena"
            lastName="Bednar"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            dateTime="2020-01-01 16:00:00"
          />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Home
