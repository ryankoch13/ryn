import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { getVersion, getBuildNumber } from 'react-native-device-info'

import { reducer, ReducerAction } from './reducer'
import { State } from '../../types/state'
// import { LanguageModel } from '../../types/models'
import { ThemeName, ThemeType } from '../theme'

export const initialState: State = {
  stateLoaded: false,
  settings: {
    username: '',
    // model: LanguageModel.Default,
    biometrics: false,
    theme: ThemeType.light,
  },
  appVersion: {
    build: getBuildNumber(),
    version: getVersion(),
  },
  onboarding: {
    nameCreated: false,
    pinCreated: false,
    modelChosen: false,
    calendarSetup: false,
    onboardingComplete: false,
  },
}

type Reducer = <S extends State>(state: S, action: ReducerAction<any>) => S

interface StoreProviderProps extends React.PropsWithChildren {
  initialState?: State
  reducer?: Reducer
}

export const StoreContext = createContext<
  [State, Dispatch<ReducerAction<any>>]
>([
  initialState,
  () => {
    return
  },
])

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
