import { addDecorator } from '@storybook/react'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'

import '../styles/globals.css'

addDecorator((storyFn) => (
  <UserProvider supabaseClient={supabaseClient}>
    {storyFn()}
  </UserProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}