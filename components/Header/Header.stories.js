import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => <Header />
