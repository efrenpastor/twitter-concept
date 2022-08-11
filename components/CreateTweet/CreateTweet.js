import { useState } from 'react'

import { Card } from '../Card'
import { Avatar } from '../Avatar'
import { Input } from '../Input'

import useProfile from '../../hooks/useProfile'
import useTweets from '../../hooks/useTweets'
import useValidate from '../../hooks/useValidate'

import styles from './CreateTweet.module.css'

const CreateTweet = ({
  onSuccess = () => {}
}) => {
  const [error, setError] = useState(null)
  const { profile } = useProfile()
  const { insert } = useTweets()
  const { validateTweet } = useValidate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const tweet = e.target.value
      console.log(tweet)
      validateTweet(tweet)
      await insert({ content: tweet })
      e.target.value = ''
      onSuccess()
    } catch (error) {
      if (error.message) {
        setError(error.message)
      } else {
        console.error(error)
      }
    }
  }

  return (
    <Card className={styles.createTweet}>
      <div className={styles.avatar}><Avatar src={profile?.avatar_url} /></div>
      <Input
        className={styles.input}
        placeholder="What's happening?"
        onChange={() => setError(null)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        error={error}
      />
    </Card>
  )
}

export default CreateTweet
