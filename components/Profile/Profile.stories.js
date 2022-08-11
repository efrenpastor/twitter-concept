import Profile from './Profile'

export default {
  title: 'Components/Profile',
  component: Profile,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <Profile {...args} />
Default.args = {
  avatar: '/images/avatarPlaceholder.jpg',
  fullName: 'Lorena Bednar',
  username: 'lbednar',
  followerCount: '4700',
  followingCount: '6300'
}
