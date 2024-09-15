import { ThemeType } from "../contexts/theme"
import { LanguageModel } from "./models"

export interface SettingsState {
    username: string
    model: LanguageModel
    biometrics: boolean
    theme: ThemeType
}

export interface AppVersion {
    build: string
    version: string
}

export interface OnboardingState {
    nameCreated: boolean
    pinCreated: boolean
    modelChosen: boolean
    calendarSetup: boolean
    onboardingComplete: boolean
}

export interface State {
    stateLoaded: boolean
    settings: SettingsState
    appVersion: AppVersion
    onboarding: OnboardingState
}