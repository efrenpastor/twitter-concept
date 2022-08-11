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
import useFollowers from '../hooks/useFollowers'

import styles from './index.module.css'

const Home = () => {
  const { profile } = useProfile()
  const { getAll } = useTweets()
  const { getFollowersCount, getFollowingCount } = useFollowers()
  const [tweets, setTweets] = useState([])
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)

  const handleTweets = () => {
    getAll().then(setTweets)
  }

  useEffect(() => {
    handleTweets()
  }, [])

  useEffect(() => {
    if (profile && profile.id) {
      getFollowersCount(profile.id).then(setFollowers)
      getFollowingCount(profile.id).then(setFollowing)
    }
  }, [profile, getFollowersCount, getFollowingCount])

  return (
    <>
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
            followers={followers}
            following={following}
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
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })

export default Home
