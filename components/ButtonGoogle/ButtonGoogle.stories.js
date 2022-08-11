import ButtonGoogle from './ButtonGoogle'

export default {
  title: 'Components/ButtonGoogle',
  component: ButtonGoogle,
  decorations: [
    (Story) => (
      <div style={{}}>
        <Story />
      </div>
    )
  ]
}

export const Default = () => <ButtonGoogle />
