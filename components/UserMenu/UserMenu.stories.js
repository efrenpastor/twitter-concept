import UserMenu from './UserMenu'

export default {
  title: 'Components/UserMenu',
  component: UserMenu,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => <UserMenu />
