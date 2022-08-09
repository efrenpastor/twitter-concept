import Card from './Card'

export default {
  title: 'Card',
  component: Card,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => <Card>Card component with content</Card>
export const Blood = () => <Card space="none">Card component with content without padding</Card>
