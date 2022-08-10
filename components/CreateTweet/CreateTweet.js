import styles from './CreateTweet.module.css'
import { Card } from '../Card'
import { Avatar } from '../Avatar'
import { Input } from '../Input'

const CreateTweet = ({
  avatar
}) => (
  <Card className={styles.createTweet}>
    <Avatar src={avatar} />
    <Input className={styles.input} placeholder="What's happening?" />
  </Card>
)

export default CreateTweet
