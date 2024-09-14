import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage'

import { KeychainServices } from '../utils/constants'

export interface AuthContext {
    setPIN: (value: string) => Promise<any>
    checkPIN: (value: string) => Promise<void>
    setBiometrics: (value: boolean) => Promise<void>
    checkBiometrics: (value: string) => Promise<void>
    authenticated: boolean
    setAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContext>(null as unknown as AuthContext)

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false)

    const setPIN = async (value: string) => {
        RNSecureStorage.setItem(KeychainServices.Pin, value, {accessible: ACCESSIBLE.WHEN_UNLOCKED}).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
      
      const checkPIN = async (value: string) => {
        RNSecureStorage.getItem(KeychainServices.Pin).then((res) => {
          if (res === value) return true
          else return false
        }).catch((err) => {
          console.log(err)
        })
      }
      
      const setBiometrics = async (value: boolean) => {
        RNSecureStorage.setItem(KeychainServices.Pin, value.toString(), {accessible: ACCESSIBLE.WHEN_UNLOCKED}).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
      
      const checkBiometrics = async () => {
        RNSecureStorage.getItem(KeychainServices.Pin).then((res) => {
          if (res == 'true') return true
          else return false
        })
      }
      return (
        <AuthContext.Provider
            value={{
                setPIN,
                checkPIN,
                setBiometrics,
                checkBiometrics,
                authenticated,
                setAuthenticated,
            }}>
                {children}
            </AuthContext.Provider>
      )

}

export const useAuth = () => useContext(AuthContext)