import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => (
  <div className="grid gap-3 grid-flow-col items-center justify-start">
    <Avatar src="/images/avatarPlaceholder.jpg" text="EP" size="xs" />
    <Avatar src="/images/avatarPlaceholder.jpg" text="EP" size="s" />
    <Avatar src="/images/avatarPlaceholder.jpg" text="EP" />
    <Avatar src="/images/avatarPlaceholder.jpg" text="EP" size="l" />
    <Avatar src="/images/avatarPlaceholder.jpg" text="EP" size="xl" />
  </div>
)

export const Text = () => (
  <div className="grid gap-3 grid-flow-col items-center justify-start">
    <Avatar text="EP" size="xs" />
    <Avatar text="EP" size="s" />
    <Avatar text="EP" />
    <Avatar text="EP" size="l" />
    <Avatar text="EP" size="xl" />
  </div>
)
