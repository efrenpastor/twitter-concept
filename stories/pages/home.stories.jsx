import Home from '../../pages/index'

export default {
  title: 'Pages/Home',
  component: Home,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <Home {...args} />
Default.args = {
}
