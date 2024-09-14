import AsyncStorage from '@react-native-async-storage/async-storage'

import type { OnboardingState, State, SettingsState } from '../../types/state'
import { LocalStorageKeys, IntroProgress } from '../../utils/constants'

enum StateDispatchAction {
    STATE_LOADED = 'state/stateLoaded',
    STATE_DISPATCH = 'state/stateDispatch'
}

enum SettingsDispatchAction {
    DISPLAY_NAME_UPDATED = 'preferences/usernameUpdated',
    BIOMETRICS_UPDATED = 'preferences/biometricsUpdated'
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
        case OnboardingDispatchAction.ONBOARDING_COMPLETE: {
            const onboarding: OnboardingState = {
              ...state.onboarding,
              onboardingComplete: true,
            }
            const newState = {
              ...state,
              onboarding,
            }
            AsyncStorage.setItem(LocalStorageKeys.Onboarding, JSON.stringify(newState.onboarding))
            return newState
          }
        // additional dispatch cases
        default: 
        return state
    }
}