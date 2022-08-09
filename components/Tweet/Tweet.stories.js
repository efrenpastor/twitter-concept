import Tweet from './Tweet'

export default {
  title: 'Components/Tweet',
  component: Tweet,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <Tweet {...args} />
Default.args = {
  avatar: '/images/avatarPlaceholder.jpg',
  firstName: 'Lorena',
  lastName: 'Bednar',
  username: 'lbednar',
  dateTime: '25-01-2020 16:00',
  content: 'Let\'s set an age limit after wich you can\'t run for political office, perhaps a number just below 70...'
}
