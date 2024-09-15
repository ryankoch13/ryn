import {Dimensions} from 'react-native'

const colors = {
  dark: {
    brand: {
      main: '#00529E',
      foreground: '#2273B4',
      disabled: '#D4E4F0',
      dark: '#003468',
      background: '#ACC4E9',
      faded: '#5C7B94',
    },
    semantic: {
      main: '#DF7D21',
      foreground: '#F1AD2E',
      background: '#F3C342',
      alert: '#74172D',
      success: '#33823C',
      backgroundOpacity: 'rgba(18, 18, 18, 0.4)'
    },
    grayscale: {
      black: '#121212',
      darkGrey: '#3D3D3D',
      grey: '#7D7D7D',
      mediumGrey: '#ACACAC',
      lightGrey: '#EBEBEB',
      veryLightGrey: '#F6F6F6',
      white: '#FCFCFC',
    },
}}

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

const headerStyle = {

}

const theme = {
  colors,
  fontSize,
  fontWeight,
  spacing,
  borderRadius,
  borderWidth,
  height,
  width
}

export default theme
