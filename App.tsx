import React from 'react'

import { StoreProvider } from './app/contexts/reducers/store'
import { ThemeProvider } from './app/contexts/theme'
import { AuthProvider } from './app/contexts/auth'
import { ModalProvider } from './app/contexts/modal'
import RootStack from './app/navigators/RootStack'

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AuthProvider>
          {/* <ModalProvider> */}
          <RootStack />
          {/* </ModalProvider> */}
        </AuthProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
