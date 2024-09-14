import {Dimensions} from 'react-native'

export enum LocalStorageKeys {
    Onboarding = 'OnboardingState',
    Settings = 'SettingsState',
}

export enum KeychainServices {
    Pin = 'pin',
    LoginAttempt = 'loginAttempt',
    biometricsEnabled = 'false',
}

export const second = 1000
export const minute = 60000
export const hour = 3600000

export const { height, width } = Dimensions.get('window')