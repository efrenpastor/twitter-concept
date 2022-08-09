import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => <Button>Action</Button>
export const Secondary = () => <Button secondary>Action</Button>
export const Disabled = () => <Button disabled>Action</Button>
export const Squared = () => <Button squared>Action</Button>
