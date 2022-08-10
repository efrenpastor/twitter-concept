import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = (args) => <Input {...args} />
Default.args = {
  placeholder: 'What\'s happening?',
  type: 'text'
}
