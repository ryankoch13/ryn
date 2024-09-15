import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import theme, { ColorObject, Colors } from '../theme'
import { useStore } from './reducers/store'
import { DispatchAction } from './reducers/reducer'

const { colors, fontWeight } = theme

export enum ThemeType {
  dark = 'dark',
  light = 'light',
}

export const ThemeName = {
  [ThemeType.dark]: 'Dark',
  [ThemeType.light]: 'Light',
}

export interface ThemeContext {
  activeTheme: ThemeType
  setActiveTheme: (theme: ThemeType) => void
  themeName: string
  theme: Colors
  defaultScreenOptions: any
}

export const ThemeContext = createContext<ThemeContext>(
  null as unknown as ThemeContext,
)

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useStore()
  const activeTheme = state.settings.theme
  const themeName = ThemeName[activeTheme]
  const theme = colors[activeTheme]

  const defaultScreenOptions = {
    headerStyle: {
      backgroundColor: colors[activeTheme].brand.primary,
    },
    headerTintColor: colors[activeTheme].grayscale.white,
    headerTitleStyle: { fontWeight: fontWeight.bold },
  }

  const setActiveTheme = (theme: ThemeType) => {
    try {
      dispatch({
        type: DispatchAction.THEME_UPDATED,
        payload: [theme],
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme,
        themeName,
        theme,
        defaultScreenOptions,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
