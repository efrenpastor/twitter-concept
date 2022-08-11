import { Card } from '../Card'
import MicroProfile from './MicroProfile'

export default {
  title: 'Components/MicroProfile',
  component: MicroProfile,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <Card><MicroProfile {...args} /></Card>
Default.args = {
  avatar: '/images/avatarPlaceholder.jpg',
  fullName: 'Lorena Bednar',
  username: 'lbednar'
}
