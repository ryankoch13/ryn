import AsyncStorage from '@react-native-async-storage/async-storage'

import type { OnboardingState, State, SettingsState } from '../../types/state'
import { LocalStorageKeys } from '../../utils/constants'
import { IntroProgress } from '../../types/navigation'
import { ThemeType } from '../theme'

enum StateDispatchAction {
    STATE_LOADED = 'state/stateLoaded',
    STATE_DISPATCH = 'state/stateDispatch'
}

enum SettingsDispatchAction {
    DISPLAY_NAME_UPDATED = 'preferences/usernameUpdated',
    BIOMETRICS_UPDATED = 'preferences/biometricsUpdated',
    THEME_UPDATED = 'preferences/themeUpdated'
}

enum AuthenticationDispatchAction {
    DID_AUTHENTICATE = 'authentication/didAuthenticate'
}

enum OnboardingDispatchAction {
    ONBOARDING_COMPLETE = 'onboarding/onboardingComplete'
}

export type DispatchAction = 
    | StateDispatchAction
    | SettingsDispatchAction
    | AuthenticationDispatchAction
    | OnboardingDispatchAction

export const DispatchAction = {
    ...StateDispatchAction,
    ...SettingsDispatchAction,
    ...AuthenticationDispatchAction,
    ...OnboardingDispatchAction,
}

export interface ReducerAction<Reducer> {
    type: Reducer
    payload?: Array<string>
}

export const reducer = (state: State, action: ReducerAction<DispatchAction>): State => {
    switch (action.type) {
        case StateDispatchAction.STATE_LOADED: {
            return { ...state, stateLoaded: true }
        }
        case StateDispatchAction.STATE_DISPATCH: {
            const newState: State = (action?.payload || []).pop()
            return { ...state, ...newState }
        }
        case SettingsDispatchAction.DISPLAY_NAME_UPDATED: {
            const username = (action?.payload ?? ['']).pop() ?? ''
            const settings: SettingsState = {
                ...state.settings,
                username: username,
            }
            const newState = {
                ...state,
                settings,
            }
            AsyncStorage.setItem(LocalStorageKeys.Settings, JSON.stringify(settings))
            return newState
            // return state
        }
        case SettingsDispatchAction.BIOMETRICS_UPDATED: {
            const choice = (action?.payload ?? [false]).pop()
            const settings: SettingsState = {
                ...state.settings,
                biometrics: choice as boolean,
            }
            const newState = {
                ...state,
                settings,
            }
            AsyncStorage.setItem(LocalStorageKeys.Settings, JSON.stringify(settings))
            return newState
        }
        case SettingsDispatchAction.THEME_UPDATED: {
            const choice = (action?.payload ?? [false]).pop()
            const settings: SettingsState = {
                ...state.settings,
                theme: choice as ThemeType,
            }
            const newState = {
                ...state,
                settings,
            }
            AsyncStorage.setItem(LocalStorageKeys.Settings, JSON.stringify(settings))
            return newState
        }
        case OnboardingDispatchAction.ONBOARDING_COMPLETE: {
            const onboarding: OnboardingState = {
              ...state.onboarding,
              onboardingComplete: true,
            }
            const newState = {
              ...state,
              onboarding,
            }
            AsyncStorage.setItem(LocalStorageKeys.Intro, JSON.stringify(newState.onboarding))
            return newState
          }
        // additional dispatch cases
        default: 
        return state
    }
}