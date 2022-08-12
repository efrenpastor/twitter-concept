import { withPageAuth } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect, useCallback } from 'react'
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
  const { getAll, getAllByUsers } = useTweets()
  const { getFollowers, getFollowing } = useFollowers()
  const [tweets, setTweets] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  const [recommendedFollowing, setRecommendedFollowing] = useState([])

  const handleTweets = useCallback(() => {
    getAll().then(setTweets)
  }, [getAll])

  const refetchFollowing = () => {
    getFollowing(profile.id).then(setFollowing)
  }

  const filterTweets = (id) => {
    if (filteredProfiles.includes(id)) return null

    setFilteredProfiles([id, ...filteredProfiles])
  }

  const unfilterTweets = (id) => {
    setFilteredProfiles(filteredProfiles.filter(profile => profile !== id))
  }

  const isFollowing = (id) => following.filter(follower => follower.profiles.id === id).length > 0

  useEffect(() => {
    if (filteredProfiles?.length) {
      getAllByUsers(filteredProfiles).then(setTweets)
    } else {
      getAll().then(setTweets)
    }
  }, [filteredProfiles, getAllByUsers, getAll])

  useEffect(() => {
    if (profile && profile.id) {
      getFollowers(profile.id).then(setFollowers)
      getFollowing(profile.id).then(setFollowing)
    }
  }, [profile, getFollowers, getFollowing])

  useEffect(() => {
    if (profile && profile.id) {
      const followingProfiles = following.map(following => following.profiles.id)
      const excludedProfiles = [...followingProfiles, profile.id]
      getProfiles(excludedProfiles).then(setRecommendedFollowing)
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
            followersCount={followers?.length || 0}
            followingCount={following?.length || 0}
          />
          {following?.length > 0 && (
            <Card className="grid gap-4">
              <p className='font-semibold'>Following</p>
              {following.map((profile) => (
                <MicroProfile
                  key={profile.profiles.id}
                  id={profile.profiles.id}
                  avatar={profile.profiles.avatar_url}
                  username={profile.profiles.user_name}
                  fullName={profile.profiles.full_name}
                  following={isFollowing(profile.profiles.id)}
                  onUnfollow={refetchFollowing}
                  onSelect={filterTweets}
                  onUnselect={unfilterTweets}
                />
              ))}
            </Card>
          )}
          {recommendedFollowing?.length > 0 && (
            <Card className="grid gap-4">
              <p className='font-semibold'>Recommended to follow</p>
              {recommendedFollowing.map((profile) => (
                <MicroProfile
                  key={profile.id}
                  id={profile.id}
                  avatar={profile.avatar_url}
                  username={profile.user_name}
                  fullName={profile.full_name}
                  onFollow={refetchFollowing}
                  following={isFollowing(profile.id)}
                />
              ))}
            </Card>
          )}
          {followers?.length > 0 && (
            <Card className="grid gap-4">
              <p className='font-semibold'>Followers</p>
              {followers.map((profile) => (
                <MicroProfile
                  id={profile.profiles.id}
                  key={profile.profiles.id}
                  avatar={profile.profiles.avatar_url}
                  username={profile.profiles.user_name}
                  fullName={profile.profiles.full_name}
                  onFollow={refetchFollowing}
                  onUnfollow={refetchFollowing}
                  following={isFollowing(profile.profiles.id)}
                />
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
