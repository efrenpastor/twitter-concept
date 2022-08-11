import { supabaseClient } from '@supabase/auth-helpers-nextjs'

const useFollowers = () => {
  const getFollowers = async (id) => {
    if (!id) return null

    try {
      const { data } = await supabaseClient
        .from('followers')
        .select(`
          profiles (
            id,
            user_name,
            full_name,
            avatar_url
          )
        `)
        .eq('user_id', id)
        .order('created_at', { ascending: false })
      return data || []
    } catch (error) {
      console.error(error.message)
    }
  }

  const getFollowersCount = async (id) => {
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
  }

  const getFollowing = async (id) => {
    if (!id) return null

    try {
      const { data } = await supabaseClient
        .from('followers')
        .select(`
          profiles (
            id,
            user_name,
            full_name,
            avatar_url
          )
        `)
        .eq('follower_id', id)
        .order('created_at', { ascending: false })
      return data || []
    } catch (error) {
      console.error(error.message)
    }
  }

  const getFollowingCount = async (id) => {
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
  }

  return { getFollowers, getFollowing, getFollowersCount, getFollowingCount }
}

export default useFollowers
