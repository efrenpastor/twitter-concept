import CreateTweet from './CreateTweet'

export default {
  title: 'Components/CreateTweet',
  component: CreateTweet,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <CreateTweet {...args} />
Default.args = {
  avatar: '/images/avatarPlaceholder.jpg'
}
