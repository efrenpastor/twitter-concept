import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useCallback } from 'react'

const useFollowers = () => {
  const getFollowers = useCallback(async (id) => {
    if (!id) return null

    try {
      const { data } = await supabaseClient
        .from('followers')
        .select(`
          profiles!followers_follower_id_fkey (
            id,
            user_name,
            full_name,
            avatar_url
          )
        `)
        .eq('user_id', id)
      return data || []
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  const getFollowersCount = useCallback(async (id) => {
    if (!id) return null

    try {
      const { count } = await supabaseClient
        .from('followers')
        .select('*', { count: 'exact' })
        .eq('user_id', id)

      return count
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  const getFollowing = useCallback(async (id) => {
    if (!id) return null

    try {
      const { data } = await supabaseClient
        .from('followers')
        .select(`
          profiles!followers_user_id_fkey (
            id,
            user_name,
            full_name,
            avatar_url
          )
        `)
        .eq('follower_id', id)
      return data || []
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  const getFollowingCount = useCallback(async (id) => {
    if (!id) return null

    try {
      const { count } = await supabaseClient
        .from('followers')
        .select('*', { count: 'exact' })
        .eq('follower_id', id)
      return count
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  const follow = async (follower_id, user_id) => {
    if (!follower_id || !user_id) return null

    try {
      await supabaseClient
        .from('followers')
        .insert({
          user_id,
          follower_id
        })
    } catch (error) {
      console.error(error.message)
    }
  }

  const unfollow = async (follower_id, user_id) => {
    if (!follower_id || !user_id) return null

    try {
      await supabaseClient
        .from('followers')
        .delete()
        .eq('user_id', user_id)
        .eq('follower_id', follower_id)
    } catch (error) {
      console.error(error.message)
    }
  }

  return {
    getFollowers,
    getFollowing,
    getFollowersCount,
    getFollowingCount,
    follow,
    unfollow
  }
}

export default useFollowers
