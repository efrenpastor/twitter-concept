import LoginPage from '../../pages/login/index'

export default {
  title: 'Pages/Login',
  component: LoginPage,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <LoginPage {...args} />
Default.args = {
}
