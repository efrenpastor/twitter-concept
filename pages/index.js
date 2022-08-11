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
  const { profile, getProfiles } = useProfile()
  const { getAll } = useTweets()
  const { getFollowers, getFollowing } = useFollowers()
  const [tweets, setTweets] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [recommendedFollowing, setRecommendedFollowing] = useState([])

  const handleTweets = () => {
    getAll().then(setTweets)
  }

  useEffect(() => {
    handleTweets()
  }, [])

  useEffect(() => {
    if (profile && profile.id) {
      getFollowers(profile.id).then(setFollowers)
      getFollowing(profile.id).then(setFollowing)
    }
  }, [profile, getFollowers, getFollowing])

  useEffect(() => {
    if (profile && profile.id && following?.length === 0) {
      getProfiles(profile.id).then(setRecommendedFollowing)
    }
  }, [profile, getProfiles, following])

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
            followers={followers?.length || 0}
            following={following?.length || 0}
          />
          {following?.length > 0 && (
            <Card className="grid gap-6">
              <p className='font-semibold'>Following</p>
              {following.map((profile) => (
                <MicroProfile key={profile.id} avatar={profile.avatar_url} username={profile.user_name} fullName={profile.full_name} />
              ))}
            </Card>
          )}
          {followers?.length === 0 && recommendedFollowing?.length > 0 && (
            <Card className="grid gap-6">
              <p className='font-semibold'>Recommended to follow</p>
              {recommendedFollowing.map((profile) => (
                <MicroProfile key={profile.id} avatar={profile.avatar_url} username={profile.user_name} fullName={profile.full_name} />
              ))}
            </Card>
          )}
          {followers?.length > 0 && (
            <Card className="grid gap-6">
              <p className='font-semibold'>Followers</p>
              {followers.map((profile) => (
                <MicroProfile key={profile.id} avatar={profile.avatar_url} username={profile.user_name} fullName={profile.full_name} />
              ))}
            </Card>
          )}
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
