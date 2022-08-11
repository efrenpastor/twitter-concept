import { Card } from '../Card'
import { Avatar } from '../Avatar'
import { Input } from '../Input'

import useProfile from '../../hooks/useProfile'
import useTweets from '../../hooks/useTweets'

import styles from './CreateTweet.module.css'

const CreateTweet = ({
  onSuccess = () => {}
}) => {
  const { profile } = useProfile()
  const { insert } = useTweets()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await insert({ content: e.target.value })
      e.target.value = ''
      onSuccess()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className={styles.createTweet}>
      <div className={styles.avatar}><Avatar src={profile?.avatar_url} /></div>
      <Input
        className={styles.input}
        placeholder="What's happening?"
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
      />
    </Card>
  )
}

export default CreateTweet
