import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Card } from '../components/Card'
import { Profile } from '../components/Profile'
import { CreateTweet } from '../components/CreateTweet'
import { Tweet } from '../components/Tweet'
import { MicroProfile } from '../components/MicroProfile'

import useProfile from '../hooks/useProfile'
import useTweets from '../hooks/useTweets'

import styles from './index.module.css'

const Home = () => {
  const { profile } = useProfile()
  const { getAll } = useTweets()
  const [tweets, setTweets] = useState([])

  const handleTweets = () => {
    getAll().then(setTweets)
  }

  useEffect(() => {
    handleTweets()
  }, [])

  return (
    <div>
      <Head>
        <title>Twitter Concept</title>
        <meta name="description" content="Twitter Concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.layout}>
        <section>
          <Profile
            avatar={profile?.avatar_url}
            username={profile?.user_name}
            fullName={profile?.full_name}
            bio={profile?.bio}
            followerCount={profile?.follower_count}
            followingCount={profile?.following_count}
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
          <CreateTweet onSuccess={handleTweets} />
          {tweets?.map((tweet, i) => (
            <Tweet
              key={i}
              avatar={tweet.profiles.avatar_url}
              username={tweet.profiles.user_name}
              fullName={tweet.profiles.full_name}
              content={tweet.content}
              dateTime={tweet.created_at}
            />
          ))}
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Home
