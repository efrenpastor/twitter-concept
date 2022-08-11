import { useUser } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState, useCallback } from 'react'

const useProfile = () => {
  const { user } = useUser()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (user) {
      supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .then(({ data }) => {
          setProfile(data[0])
        }).catch(console.error)
    } else {
      setProfile(null)
    }
  }, [user])

  const getProfiles = useCallback(async (exclude) => {
    try {
      const { data } = await supabaseClient
        .from('profiles')
        .select('*')
        .neq('id', exclude)
      return data || []
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  return { profile, getProfiles }
}

export default useProfile
