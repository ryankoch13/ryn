import { Dimensions } from 'react-native'

export type Colors = {
  brand: {
    primary: string
    secondary: string
    background: string
    light: string
    dark: string
    disabled: string
  }
  neutral: {
    soft: string
    accent: string
  }
  semantic: {
    error: string
    alert: string
    success: string
    transparent: string
  }
  grayscale: {
    black: string
    veryDarkGrey: string
    darkGrey: string
    mediumGrey: string
    lightGrey: string
    veryLightGrey: string
    white: string
  }
  gradient: {
    foreground: Array<string>
    background: Array<string>
  }
}

export type ColorObject = {
  dark: Colors
  light: Colors
}

const colors: ColorObject = {
  dark: {
    brand: {
      primary: '#C01ABD',
      secondary: '#FF6F61',
      background: '#E6E6FA',
      light: '#F4A582',
      dark: '#8B008B',
      disabled: 'rgba(192, 26, 189, 0.4)',
    },
    neutral: {
      soft: '#FFC0CB',
      accent: '#20B2AA',
    },
    semantic: {
      error: '#C83A3A',
      alert: '#FFCC99',
      success: '#32CD32',
      transparent: 'rgba(18, 18, 18, 0.4)',
    },
    grayscale: {
      black: '#121212',
      veryDarkGrey: '#7D7D7D',
      darkGrey: '#3D3D3D',
      mediumGrey: '#ACACAC',
      lightGrey: '#EBEBEB',
      veryLightGrey: '#F6F6F6',
      white: '#FCFCFC',
    },
    gradient: {
      foreground: ['#C01ABD', '#FF6F61'],
      background: ['#C01ABD', '#E6E6FA'],
    },
  },
  light: {
    brand: {
      primary: '#C01ABD',
      secondary: '#FF6F61',
      background: '#E6E6FA',
      light: '#F4A582',
      dark: '#8B008B',
      disabled: 'rgba(192, 26, 189, 0.4)',
    },
    neutral: {
      soft: '#FFC0CB',
      accent: '#20B2AA',
    },
    semantic: {
      error: '#C83A3A',
      alert: '#FFCC99',
      success: '#32CD32',
      transparent: 'rgba(18, 18, 18, 0.4)',
    },
    grayscale: {
      black: '#121212',
      veryDarkGrey: '#7D7D7D',
      darkGrey: '#3D3D3D',
      mediumGrey: '#ACACAC',
      lightGrey: '#EBEBEB',
      veryLightGrey: '#F6F6F6',
      white: '#FCFCFC',
    },
    gradient: {
      foreground: ['#C01ABD', '#FF6F61'],
      background: ['#C01ABD', '#E6E6FA'],
    },
  },
}

const fontSize = {
  xxs: 8,
  xs: 10,
  s: 12,
  m: 14,
  l: 18,
  xl: 24,
  xxl: 32,
  xxxl: 40,
}

const spacing = {
  xxxss: 2,
  xxxs: 4,
  xxs: 6,
  xs: 8,
  s: 10,
  m: 15,
  l: 20,
  xl: 25,
  xxl: 30,
  xxll: 40,
  xxxl: 50,
}

const borderRadius = {
  xs: 5,
  s: 8,
  m: 10,
  l: 15,
  xl: 25,
  xxll: 50,
}

const borderWidth = {
  s: 0.5,
  m: 1,
  l: 2,
  xl: 3,
}

const fontWeight: any = {
  thin: '400',
  normal: '500',
  bold: '600',
  heavy: '700',
}

const { height, width } = Dimensions.get('window')

const headerStyle = {}

const _theme = {
  colors,
  fontSize,
  fontWeight,
  spacing,
  borderRadius,
  borderWidth,
  height,
  width,
}

export default _theme
