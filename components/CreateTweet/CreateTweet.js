import styles from './CreateTweet.module.css'
import { Card } from '../Card'
import { Avatar } from '../Avatar'
import { Input } from '../Input'

const CreateTweet = ({
  avatar
}) => (
  <Card className={styles.createTweet}>
    <div className={styles.avatar}><Avatar src={avatar} /></div>
    <Input className={styles.input} placeholder="What's happening?" />
  </Card>
)

export default CreateTweet
