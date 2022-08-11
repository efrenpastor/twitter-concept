import { useUser } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'

const useTweets = () => {
  const { user } = useUser()

  const insert = async ({
    content
  }) => {
    if (user) {
      return await supabaseClient
        .from('tweets')
        .insert({
          content,
          user_id: user.id
        })
    }

    throw new Error('User not found')
  }

  const getAll = async () => {
    try {
      const { data } = await supabaseClient
        .from('tweets')
        .select(`
          content,
          created_at,
          profiles (
            id,
            user_name,
            full_name,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false })
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return { insert, getAll }
}

export default useTweets
